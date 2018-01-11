import { Injectable, EventEmitter } from '@angular/core';
import { screen, desktopCapturer, remote, FileFilter, ipcRenderer } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ElectronService {
  private captureScreenMenu$: EventEmitter<void> = null;

  constructor() {}

  // It initializes the EventEmitter only when called the first time
  listenCaptureScreenMenu(): EventEmitter<void> {
    if (!this.captureScreenMenu$) {
      this.captureScreenMenu$ = new EventEmitter<void>();
      ipcRenderer.on('screenshot', event => {
        this.captureScreenMenu$.emit();
      });
    }
    return this.captureScreenMenu$;
  }

  captureScreen(): Promise<Buffer> {
    const options: Electron.SourcesOptions = {
      types: ['screen'], // Can also add 'window'
      thumbnailSize: screen.getPrimaryDisplay().workAreaSize
    };

    return new Promise((resolve, reject) => {
      desktopCapturer.getSources(options, (error, sources) => {
        if (error) {
          reject(error);
        } else {
          const mainScreen = sources.filter(
            s => s.name === 'Entire screen' || s.name === 'Screen 1'
          )[0];
          resolve(mainScreen.thumbnail.toPNG());
        }
      });
    });
  }

  saveImage(buffer: Buffer, file: string): Promise<string> {
    const filePath = path.join(remote.app.getAppPath(), 'assets', 'img', file);
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, buffer, error => {
        if (error) {
          reject(error);
        } else {
          resolve(filePath);
        }
      });
    });
  }

  getImages(multi = false): Promise<string[]> {
    const filters: FileFilter[] = [
      {
        name: 'Images (JPG, PNG)',
        extensions: ['png', 'jpg', 'jpeg']
      }
    ];

    ipcRenderer.send('selectFiles', multi, filters);
    return new Promise((resolve, reject) => {
      // It removes the event listener when it receives a value
      ipcRenderer.once('files', (event, files) => resolve(files));
    });
  }
}

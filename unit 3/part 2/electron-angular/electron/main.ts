import { app, BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path';
let win: BrowserWindow = null;

app.on('ready', () => {
  win = new BrowserWindow();
  win.setContentSize(800, 600);
  win.loadURL(
    url.format({
      pathname: path.join(app.getAppPath(), 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
  // win.webContents.openDevTools();
  win.on('closed', () => {
    // When the app is closed
    win = null;
  });
});

import { app, BrowserWindow, ipcMain, FileFilter, OpenDialogOptions, dialog, Menu } from 'electron';
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

  win.setMenu(Menu.buildFromTemplate([{
    label: 'Capture screen',
    click: (menuItem, window, event) => {
      win.webContents.send('screenshot');
    }
  }]));

  // win.webContents.openDevTools();
  win.on('closed', () => {
    // When the app is closed
    win = null;
  });
});

ipcMain.on('selectFiles',
  (event, multiple: boolean = false, filters: FileFilter[] = null) => {
    const options: OpenDialogOptions = {
      title: 'Select files',
      defaultPath: app.getAppPath(),
      filters: filters,
      properties: multiple ? ['openFile', 'multiSelections'] : ['openFile']
    };
    dialog.showOpenDialog(win, options, files =>
      win.webContents.send('files', files)
    );
  }
);

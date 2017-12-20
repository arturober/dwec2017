import { app, ipcMain, BrowserWindow, Menu, Tray } from 'electron';
import * as url from 'url';
import * as path from 'path';
import { menuTemplate } from './menu';

let win: BrowserWindow = null;
let winDialog: BrowserWindow = null;

app.setName('Electron example');

app.on('ready', () => {
    const tray = new Tray(path.join('img', 'icon.png'));
    const trayMenu = Menu.buildFromTemplate([
        {
            label: 'Item 1'
        }, {
            role: 'quit'
        }
    ]);
    tray.setContextMenu(trayMenu);
    tray.setToolTip('Electron example');

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
    const menu = Menu.buildFromTemplate(menuTemplate);
    win.setMenu(menu);

    win.on('closed', () => {
        // When the app is closed
        console.log('Bye bye!');
        win = null;
    });
});

ipcMain.on('openDialog', (event, name) => {
    if (winDialog) return;
    winDialog = new BrowserWindow();
    winDialog.setBounds({ x: 0, y: 0, width: 320, height: 240 });
    winDialog.loadURL(
        url.format({
            pathname: path.join(app.getAppPath(), 'dialog.html'),
            protocol: 'file:',
            slashes: true
        })
    );
    winDialog.setMenu(null);

    winDialog.on('closed', () => (winDialog = null));

    winDialog.webContents.on('did-finish-load', () => {
        winDialog.webContents.send('name', name);
    });
});

ipcMain.on('closeDialog', event => {
    if (winDialog) winDialog.close();
});

import { shell } from 'electron';

export const menuTemplate: Electron.MenuItemConstructorOptions[] = [
    {
        label: 'My app',
        submenu: [
            {
                label: 'Say hello',
                click: (menuItem, browserWindow, event) => {
                    browserWindow.webContents.send('sayHello');
                },
                accelerator: 'CommandOrControl+H'
            },
            {
                label: 'Check me',
                type: 'checkbox',
                checked: true
            },
            {
                role: 'quit'
            }
        ]
    },
    {
        role: 'editMenu'
    },
    {
        label: 'About',
        submenu: [
            {
                label: 'About Electron',
                click: (menuItem, win, event) => {
                    // Open an external browser with this url
                    shell.openExternal('https://electronjs.org');
                }
            }
        ]
    }
];

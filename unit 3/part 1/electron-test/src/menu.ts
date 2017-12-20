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
    }
];

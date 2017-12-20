import { ipcRenderer } from 'electron';

ipcRenderer.on('name', (event, name) => {
    document.getElementById('name').textContent = `Hello ${name}!`;
});

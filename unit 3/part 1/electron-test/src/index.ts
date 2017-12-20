import { ipcRenderer } from 'electron';

document.getElementById('open').addEventListener('click', e => {
    let name = (<HTMLInputElement>document.getElementById("name")).value;    
    ipcRenderer.send('openDialog', name);
});

document.getElementById('close').addEventListener('click', e => {
    ipcRenderer.send('search');
})

ipcRenderer.on('sayHello', (event) => {
    document.getElementById('hello').innerText = 'Hello World!';
});


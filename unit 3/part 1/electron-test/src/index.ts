import {
    ipcRenderer,
    clipboard,
    SourcesOptions,
    screen,
    desktopCapturer,
    shell,
    remote
} from 'electron';
import * as fs from 'fs';
import * as path from 'path';

let input = <HTMLInputElement>document.getElementById('name');

document.getElementById('open').addEventListener('click', e => {
    let name = input.value;
    ipcRenderer.send('openDialog', name);
});

document.getElementById('close').addEventListener('click', e => {
    ipcRenderer.send('search');
});

ipcRenderer.on('sayHello', event => {
    document.getElementById('hello').innerText = 'Hello World!';
});

document.getElementById('copy').addEventListener('click', e => {
    clipboard.writeText(input.value);
});

document.getElementById('paste').addEventListener('click', e => {
    input.value = clipboard.readText();
});

document.getElementById('screenshot').addEventListener('click', e => {
    capture(['screen'], 'screen');
});

document.getElementById('screenshot2').addEventListener('click', e => {
    capture(['window'], 'Visual Studio Code');
});

function capture(types, name) {
    const options: SourcesOptions = {
        types: types,
        //thumbnailSize: screen.getPrimaryDisplay().workAreaSize // Screen size
        thumbnailSize: { width: 800, height: 600 } // Max w:800px h:600px (keeps aspect ratio)
    };

    desktopCapturer.getSources(options, (error, sources) => {
        if (error) return;
        const source = sources.filter(s =>
            s.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )[0];

        const png = source.thumbnail.toPNG();

        let filePath = path.join(remote.app.getAppPath(),'img', new Date() + '.png');
        fs.writeFile(filePath, png, error => {
            if (error) return;
            let img = <HTMLImageElement>document.getElementById('img');
            img.src = filePath;
            // Open the folder where the image is
            shell.showItemInFolder(filePath);
            // Open the image with the default application
            shell.openItem(filePath);
        });
    });
}


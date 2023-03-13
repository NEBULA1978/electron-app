const { app, BrowserWindow } = require('electron')

// console.log('Hola desde electron')
const createwindow = () => {
    const window = new BrowserWindow({
        width:800,
        height:600,
        minWidth: 400,
        minHeight:400
    })
    // window.loadURL('https://midu.dev')
    // Para abrir pagina de github
    // window.loadURL('https://github.com/NEBULA1978')
    window.loadFile('index.html')
}
app.whenReady().then(() => {
    // Para crear mas ProcessingInstruction.habre mas ventanas
    // createwindow();
    createwindow();
});

// Este código es un script de Electron que utiliza el módulo electron para crear una ventana de aplicación. Primero se importan los módulos app y BrowserWindow de electron. Después, se define una función createwindow que crea una nueva ventana con una anchura de 800 y una altura de 600 y carga un archivo HTML llamado index.html.

// Luego, se usa el método whenReady() de la clase app para esperar hasta que Electron esté listo antes de llamar a la función createwindow(). Por último, se llama a la función createwindow() para crear una nueva ventana cuando Electron esté listo para usar.

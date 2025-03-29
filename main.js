const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({  // Fix: Remove extra parentheses
        title: "Electron",
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
        }
    });



    const startUrl = url.format({
        pathname: path.join(__dirname, './my-react-app/dist/index.html'),
        protocol: 'file:',
        slashes: true // Fix: Ensure proper URL formatting
    });

    mainWindow.loadURL("http://localhost:5173");
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

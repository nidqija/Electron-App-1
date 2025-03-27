const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({  // Fix: Remove extra parentheses
        title: "Electron",
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true // Optional: Enables Node.js integration
        }
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true // Fix: Ensure proper URL formatting
    });

    mainWindow.loadURL(startUrl);
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

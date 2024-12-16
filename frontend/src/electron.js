const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = true

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
      autoHideMenuBar: true, 
      width: 1400,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    
    //reload app when window gets resized and when app is unmaximized to rerender graphs and prevent overflowing
    mainWindow.on("resized", function(){
      mainWindow.reload()
    })
    mainWindow.on("unmaximize", function(){
      mainWindow.reload()
    })

    console.log(isDev)
    const startURL = isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`;
  
    mainWindow.loadURL(startURL);
    console.log(startURL)
  
    mainWindow.on('closed', () => (mainWindow = null));
  }
  

  app.on('ready', createWindow);
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
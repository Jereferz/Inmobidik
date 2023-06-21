const path = require('path');

exports.menuPrincipal = (req, res) => {
    res.sendFile(path.resolve(__dirname, '')) 
}

exports.login = (req, res) => {
    
}
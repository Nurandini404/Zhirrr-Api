__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'BotJepri',
            namaowner: 'JepriBarus',
            instagram: 'jepribarus14',
            youtube : 'ComingSoon'
        }
    }
    res.json(config)
})

module.exports = router

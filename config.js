/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
        amel: 'https://melcanz.com',
        zahir: 'https://zahirr-web.herokuapp.com',
        zeks: 'https://api.zeks.xyz',
        pencarikode: 'https://pencarikode.xyz',
        LeysCoder: 'https://leyscoders-api.herokuapp.com',
        lol: 'https://api.lolhuman.xyz',
        neoxr: 'https://api.neoxr.my.id',
        zekais: 'http://zekais-api.herokuapp.com'
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'E36C8A463A',
        'https://melcanz.com': 'E3tPppsD',
        'https://zahirr-web.herokuapp.com': 'zahirgans',
        'https://api.zeks.xyz': 'apivinz',
        'https://pencarikode.xyz': 'pais', 
        'https://leyscoders-api.herokuapp.com': 'dappakntlll',
        'https://api.lolhuman.xyz': '9be02aafd6efee353b7769b0',
        'https://api.neoxr.my.id': 'mfE85g5I',
        'http://zekais-api.herokuapp.com': 'zekais'
}
//user_data

// Other
global.server = '6282346048026-1620355258@g.us'
global.number = '6288229863041@s.whatsapp.net'
global.footer = 'Icha-BOTz'
global.bot = ['6283827461476']
global.owner = ['6288229863041']
global.creator = ['6288292024190']
global.premium = ['6283827461476', '6288802495232']
global.packname = 'i hope you\'r gk looting'
global.author = 'D_4J'
global.sessionName = 'icha'
global.prefa = ['!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
} 
global.limitawal = {
    premium: "Infinity",
    free: "10"
}
global.User = {
    premium: "Yes",
    free: "No"
}
global.thumb = fs.readFileSync('./lib/icha.jpg')


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

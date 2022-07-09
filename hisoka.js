/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const yargs = require('yargs/yargs')
const FileType = require('file-type')
const _ = require('lodash')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const hxz = require("hxz-api");
const path = require('path')
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const Download = require("@phaticusthiccy/open-apis");
const yts = require("yt-search")
const ytdl = require('ytdl-core')
const unicode = require('escape-unicode')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
const primbon = new Primbon()
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, generateMessageTag, getRandom, getGroupAdmins, getCase, FileSize} = require('./lib/myfunc')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//const stik = JSON.parse(fs.readFileSync('./src/stik.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = [] 
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let stik = db.data.others.stik = []
// readmore
//var groups = fazd.chats.array.filter(v => v.jid.endsWith('g.us'))
//var private = fazd.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
//global.btn
let btn = [{
  buttonId: `sc`, 
  buttonText: {
    displayText: 'SC'
  }, type: 1
},{
  buttonId: `owner`,
  buttonText: {
    displayText: 'OWNER'
  }, type: 1
}]


//Date
var tw = new Date();
if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
else (a=tw.getTime());
tw.setTime(a);
var th= tw.getFullYear ();
var h= tw.getDay ();
var b= tw.getMonth ();
var t= tw.getDate ();
var hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
var waktu_tgl= hariarray[h]+" "+t+" "+bulanarray[b]+" "+th;


module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var rep = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : '' 
    var budy = (typeof m.text == 'string' ? m.text : '')
    var prefix = /^[°zZ#@+,.?=():√%!¢£¥€π¤ΠΦ&<™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#@+,.?=():√%¢£¥€π¤ΠΦ&<!™©®Δ^βα¦|/\\©^]/gi) : '.'

    const messagesD = rep.slice(0).trim().split(/ +/).shift().toLowerCase()
    const messagesC = rep.slice(0).trim()
    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const ar = args.map((v) => v.toLowerCase())
    const pushname = m.pushName || "No Name"
    const botNumber = await hisoka.decodeJid(hisoka.user.id)
    const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = q = args.join(" ")        
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const isImage = (m.mtype === 'imageMessage')
    const isVideo = (m.mtype === 'videoMessage')
    const isSticker = (m.mtype == 'stickerMessage')
    const isAudio = (m.mtype == 'audioMessage')
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }
    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hisoka.user.jid : m.sender
     
    


//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log("Download video with ytdl-core")
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await hisoka.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
replay(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log("Download audio with ytdl-core")
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await hisoka.sendMessage(m.chat, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(err)
}
}

// Group
const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.db.data.users[m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hisoka.user.jid : m.sender] || false
try { 
  var ppuser = await hisoka.profilePictureUrl(m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hisoka.user.jid : m.sender)
} catch { 
  var ppuser = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png"
}
try {
  let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
  let user = global.db.data.users[m.sender]
  if (typeof user !== 'object') global.db.data.users[m.sender] = {}   
  if (user) {
    if (!isNumber(user.afkTime)) user.afkTime = -1
    if (!('afkReason' in user)) user.afkReason = ''
    if (isPremium) user.limit = limitUser
    if (isPremium) user.premium = true
    ban = false
    exp = 200
    level = 1
    rank = ''
  } else global.db.data.users[m.sender] = {
    afkTime: -1,
    afkReason: '',
    limit: limitUser,
    premium: false,
    ban: false,
    exp: 200,
    level: 1,
    rank: ''
  }
  let chats = global.db.data.chats[m.chat]
  if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
  if (chats) {
    jid = m.chat
    gcname = groupName
    if (!('mute' in chats)) chats.mute = false
    if (!('antilink' in chats)) chats.antilink = false
  } else global.db.data.chats[m.chat] = {
    jid: m.chat,
    gcname: groupName,
    mute: false,
    antilink: false,
  } 

  let setting = global.db.data.settings[botNumber] 
  if (typeof setting !== 'object') global.db.data.settings[botNumber] = {} 
  if (setting) {
    if (!isNumber(setting.status)) setting.status = 0
    if (!('autobio' in setting)) setting.autobio = false
    autoreact = false,
    autostiker = false,
    automake = false,
    autosimi = false,
    nsfw = false,
    levelmsg = false,
    self = false
  } else global.db.data.settings[botNumber] = {
    status: 0,
    autobio: false,
    autoreact: false,
    automake: false,
    autostiker: false,
    autosimi: false,
    nsfw: false,
    levelmsg: false,
    self: false
  }
} catch (err) {
  console.error(err)
}

//Thumbnail
let thumbnail = {
'play':{
if(!q) return replay("Teksnya mana om")
replay(mess.wait)
let rus = await yts(q)
if(rus.all.length == "0") return replay("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')

try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}

let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
"externalAdReply": {
"title": `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
"body": `   ━━━━⬤──────────    click here to play music `,
"description": 'Now Playing...',
"mediaType": 2,
"thumbnail": inithumb,
"mediaUrl": res.url,
"sourceUrl": res.url
}
}


   
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${res.views} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
hisoka.sendMessage(m.chat, {
  text: `*YOUTUBE DOWNLOADER*\n${toks}`,
  contextInfo: thumbnail,
  buttons: aklo,
  footer: global.footer,
})
}
break


	    case 'ytmp3': case 'ytaudio': {
              try {
                if (!text) return replay`Example : ytmp3 link`
                replay(mess.wait)
                let anu = await fetchJson(api('zekais', '/youtube', { url: text }, 'apikey')) 
                if (anu.size >= 100000) return replay(`File Melebihi Batas ( ${anu.size} )`)
                let msg = await hisoka.sendMessage(m.chat,{
                  image: { url: anu.thumb },
                  caption: `⭔ Title : ${anu.title}\n⭔ File Size : ${anu.audio[0].size}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Bitrate: ${anu.audio[0].bitrate}`,
                  contextInfo: thumbnail
                }, { quoted: m })
                
                hisoka.sendMessage(m.chat, { 
                  audio: { url: anu.audio[0].url }, 
                  mimetype: 'audio/mpeg', 
                  fileName: `${anu.title}.mp3`,
                  contextInfo: thumbnail,
                  footer: "Download by zekais"
                }, { quoted: msg })
              } catch (err) {
                replay(`*[error system]*\n\n\n${err}`)
              }             
            }
            break
            case 'ytmp4': case 'ytvideo': {
              if (!text) return replay(`Example: ${prefix + command} link`)
              try{ 
                if (text.includes("https://youtube.com/channel/")) return replay("Sorry itu bukan link video") 
                replay(mess.wait)
                if(text.includes("https://youtu.be/")){
                  var videoId = text.replace('https://youtu.be/', '')
                } else if(text.includes("https://youtube.com/watch?v=")){
                  var videoId = text.split('=')[1]
                } else if(q.includes("https://youtube.com/shorts/")){
                  var videoId = text.replace('https://youtube.com/shorts/', '')
                } else {
                  return replay("Link salah")
                }
                let link =`https://youtube.com/watch?v=${videoId}`
                let anu = await yts(link)
                if(anu.all.length == "0") return replay("Video tidak di temukan")
                let info = await ytdl.getInfo(link);
                let format = ytdl.chooseFormat(info.formats, { quality: '18' });
                if(Number(format.contentLength) > 60000000 ) return replay(`Maap size melebihi batas ${FileSize(format.contentLength)}`)
                let teks =`
⭔ Title : ${anu.all[0].title}
⭔ Ext : 360p
⭔ Size : ${FileSize(format.contentLength)}
⭔ ID : ${videoId}
⭔ Duration : ${anu.all[0].timestamp}
⭔ Viewers : ${anu.all[0].views}
⭔ Upload At : ${anu.all[0].ago}
⭔ Author : ${anu.all[0].author.name}
⭔ Channel : ${anu.all[0].author.url}
⭔ Description : ${anu.all[0].description}
⭔ Url : ${anu.all[0].url}`
                let msg = await hisoka.sendMessage(m.chat, {
                  image: { url: anu.all[0].image },
                  caption: teks,
                  contextInfo: thumbnail,
                  footer: "Download by ytdl-core"
                },{ quoted: m })
                try { 
                  await ytdl.getInfo(text);
                  let mp4File = getRandom('.mp4') 
                  let nana = ytdl(text)
                    .pipe(fs.createWriteStream(mp4File))
                    .on("finish", async () => {    
                      await hisoka.sendMessage(m.chat, { 
                        video: fs.readFileSync(mp4File), 
                        caption: `nih @${m.sender.split("@")[0]}`,
                        contextInfo: thumbnail,
                        footer: "Download by ytdl-core"
                      },{ quoted: msg })
                    fs.unlinkSync(`./${mp4File}`)
                    })
                } catch (err) {
                  replay(`${err}`)
                }   
              } catch(err){
                let msg = await hisoka.sendMessage(m.chat, { text: err }, {quoted : m})
                hisoka.sendMessage(m.chat, {
                  text: `Silahkan report ke owner dengan command:\n*.report* pesan`,
                  contextInfo: thumbnail
                },{ quoted: msg })
              }
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
              const { pinterest } = require("./lib/pinterest")
              if (args.length < 1) return replay(`Kirim perintah ${prefix + command } query atau ${prefix + command} query --jumlah\n*Example* : ${prefix + command} cecan atau ${prefix + command} cecan --10`)
              replay(mess.wait)
              var jumlah;
              if (q.includes('--')) jumlah = q.split('--')[1]
              pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                if (q.includes('--')) {
                  if (data.result.length < jumlah) {
                    jumlah = data.result.length
                    replay(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
                  }
                  for (let i = 0; i < jumlah; i++) {
                    hisoka.sendMessage(m.chat, { 
                      image: { url: data.result[i] }
                    })
                  }
                } else {
                  var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
                  hisoka.sendMessage(m.chat, { 
                    caption: `Hasil pencarian dari ${q}`, 
                    image: { url: pickRandom(data.result) }, 
                    buttons: but, 
                    contextInfo: thumbnail,
                    footer: 'Pencet tombol dibawah untuk foto selanjutnya' 
                  }, { quoted: m })
                }
              })
            }
            break
  case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
    if (m.isGroup) {
                return replay('*Warn⚠️⚠️*\n*Fitur tidak pantas untuk digunakan di Grup.*\n*Silahkan PC bot jika ingin tetap menggunakan fitur ini.*\n\n*note:* \n*Dosa tidak ditnggung owner.*')}
                if (!m.isGroup) {
                replay(`loading mass ..\nsabar mas jan tegang dulu ...\n*note: Dosa tidak ditnggung owner.*`)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
                  /*return replay('*FITUR DI NON-AKTIFKAN SEMENTARA*')*/
              }
            }
            break
	    case 'couple': {
                replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quoteramdom': {
              let anu = await fetchJson('https://zahirr-web.herokuapp.com/api/randomquote?apikey=zahirgans')
               let buttons = [
                    {buttonId: command, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `"${anu.result.quotes}"\n\n*~${anu.result.author}*`,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
            break
            case 'bucin': {
             let anu = await fetchJson('https://leyscoders-api.herokuapp.com/api/katabucin?apikey=dappakntlll')
             let buttons = [
                    {buttonId: command, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
           }
          break
          case 'katailham': {
            let anu = await fetchJson('https://leyscoders-api.herokuapp.com/api/katailham?apikey=dappakntlll')
             let buttons = [
                    {buttonId: command, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
            break
          case 'pakboy': {
            let anu = await fetchJson('https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=dappakntlll')
             let buttons = [
                    {buttonId: command, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
          break
	  case 'motivasi': case 'dilanquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(global.api('zenz', '/randomtext/' + command, {}, 'apikey'))
                let buttons = [
                    {buttonId: command, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
          case 'demon': case 'magma': case 'glitch': case 'devil': case 'graffiti': case 'skeleton': case 'blackpink': case 'cloud': case 'blood': case 'firework': case 'lava': case 'toxic': case 'thunder': case 'thunder2': case 'neon': case 'greenneon': case 'glitter': case 'glow': case 'galaxy': {
                if (!text) throw `Example : ${prefix + command} text`
                replay(mess.wait)
                try {
                  hisoka.sendMessage(m.chat, { image: { url: api('zekais', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
                } catch (err) {
                  replay("Fitur sedang error!")
                } 
	    }
            break
          case 'shadow': case 'flaming': case 'rainbow': case 'smoke': case 'neon': case 'doublelove': case 'wood': case 'coffe': case 'stars': case 'summer': case 'candy': case 'underwater': case 'burnpapper': case 'fur': {
                if (!text) throw 'No Query Text'
                replay(mess.wait)
                try {
                  hisoka.sendMessage(m.chat, { image: { url: api('zekais', '/oxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
                } catch (err) {
                  replay("Fitur sedang error!")
                } 
            }
            break 
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') m.reply(date)
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let anu = await fetchJson(api('zenz', '/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.result.profile, '', `⭔ Full Name : ${anu.result.full_name}\n⭔ User Name : ${anu.result.user_name}\n⭔ Followers : ${anu.result.followers}\n⭔ Following : ${anu.result.following}\n⭔ Bio : ${anu.result.bio}\n⭔ Post : ${anu.result.post}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	      case 'tt': case 'tiktok': case 'tiktoknowm': {
                if (!text && !m.quoted) throw 'masukan link / reply link'
                try {
                  let link = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : text : q ? q : text 
                  replay(mess.wait)
                  let anu = await fetchJson(api('zekais', '/tiktok2', { url: link }, 'apikey'))
                  let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                  let buttonMessage = {
                    video: { url: anu.result.no_wm },
                    caption: `*Download From* ${link}`,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    contextInfo: thumbnail,
                    headerType: 5 
                  }
                  hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }) 
                } catch (err) {
                  replay("Server error :(")
                } 
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let link = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : text : q ? q : text
                let anu = await fetchJson(api('zekais', '/tiktok2', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.with_wm },
                    caption: `*Download From* ${link}\n*Caption:* ${anu.caption}\n*Author:* ${anu.author}`,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    contextInfo: thumbnail,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                link = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                replay(mess.wait)
                let anu = await fetchJson(api('zekais', '/tiktokmusic', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `*Download From* ${link}`,
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    contextInfo: thumbnail,
                    headerType: 5
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, {
                  audio: { url: anu.result },
                  mimetype: 'audio/mpeg',
                  contextInfo: thumbnail
                },{ quoted: msg })
            }
            break

   case 'instagram': case 'ig': case 'igdl': {
     if (!text && !m.quoted) throw 'masukan link / reply link'
     try { 
       let ling = m.quoted ? m.quoted.text ? m.quoted.text : q ? q: m.text : q ? q : m.text
       replay(mess.wait)
       let anu = await fetchJson(api('neoxr', '/api/ig', { url: ling }, 'apikey'))
       let text = `*Download from*: ${ling}`
       for (let media of anu.data ) { 
         let msg = await hisoka.sendMessage(m.chat, {
         video: { url: media.url },
         caption: text,
         contextInfo: thumbnail
       },{ quoted: m })
         hisoka.sendMessage(m.chat, {
         text: `nih kak @${m.sender.split("@")[0]}`,
         contextInfo: thumbnail
       },{ quoted: msg })
       }  
     } catch (err) {
       replay("server error!")
     }
}
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                replay(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'by alica-BOTz',
                    buttons: buttons,
                    contextInfo: thumbnail,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	      case 'fbdl': case 'fb': case 'facebook': {
                if (!text) return replay(`Enter Query Link!`)
                try {
                  return replay(mess.wait)
                  let anu = await fetchJson(api('neoxr', '/api/fb', { url: text }, 'apikey')) 
                  if (!anu.status) return replay("Mungkin ad kesalahan")
                  for (let media of anu.data ) {
                    let text = `*Size*: ${media.size}\n*Quality*: ${media.quality}\n*Type*: ${media.type}`                
                    let vid = hisoka.sendMessage(m.chat, {
                      video: { url: media.url },
                      caption: text,
                      contextInfo: thumbnail 
                    },{ quoted: m })
                    hisoka.sendMessage(m.chat, {
                      text: `nih kak @${m.sender.split("@")[0]}`,
                      contextInfo: thumbnail
                    },{ quoted: m })
                  }                                    
                } catch (err) {
                  replay(err)
                }                            
              }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}`, contextInfo: thumbnail }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg', contextInfo: thumbnail }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) m.reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replay(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx', contextInfo: thumbnail}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg', contextInfo: thumbnail }, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replay(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', contextInfo: thumbnail }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(mess.owner)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n━━━━━━━━━━═══════━━━━━━━━━━═══\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
	    break
            case 'keluar': case 'leave': {
                if (m.isGroup) return replay('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendMessage(m.chat, {
                      text: `*Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner*`,
                      buttons: buttons,
                      contextInfo: thumbnail,
                      footer: global.footer
                    },{ quoted: m })
                } else { 
                  let other = room.other(m.sender) 
                  if (other) await hisoka.sendMessage(other, {
                    text: `*Partner Telah Meninggalkan Sesi Anonymous*`,
                    contextInfo: thumbnail
                  }, { quoted: m }) 
                  delete this.anonymous[room.id]
                  if (command === 'leave') break 
                }         
            }
break
            case 'mulai': case 'start': {
                if (m.isGroup) return replay('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    m.reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            break
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    m.reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            break
            case 'public': {
                if (!isCreator) return replay(mess.owner)
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(mess.owner)
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'speed': case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                return replay(respon)
            }
            break
            case 'speedtest': {
            replay('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
              if (m.isGroup) {
                let memJid = []
                let mem = []
                for (let i of participants){
                  memJid.push(i.id)
                  mem.push(i.id.split("@")[0])
                }
                let thumb = {
                  mentionedJid: [global.number, m.sender],
                  "externalAdReply": { 
                    "title": `${global.footer}`,
                    "body": `runtime bot ${runtime(process.uptime())}`,
                    "mediaType": 3,
                    "mediaUrl": "https://youtube.com/watch?v=aJRu5ltxXjc",
                    "sourceUrl": "https://dlvash.github.io",
                    "thumbnail": fs.readFileSync(`./src/jpg/alica.jpg`)
                  }
                }
                let ownerInGc = mem.includes(global.owner[0])
                if (ownerInGc) {
                  let msg = await hisoka.sendMessage(m.chat, {
                    text: `Sepertinya owner ku ad di sini ...`,
                    contextInfo: thumbnail,
                  },{ quoted : m })
                  hisoka.sendMessage(m.chat, {
                    text: `@${global.owner[0]} nih owner nya banh`,
                    
                    contextInfo: thumb
                  }, { quoted : msg })
                } else {
                  hisoka.sendContact(m.chat, global.owner, m)
                }
              } else {
                hisoka.sendContact(m.chat, global.owner, m)
              }      
            }
            break
            case 'dika': {
                hisoka.sendContact(m.chat, global.creator, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            m.reply(teks)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            hisoka.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n━━━━━━━━━━═══════━━━━━━━━━━\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            case 'help': case 'menu': {
              let timestamp = speed()
              let latensi = speed() - timestamp
              const hour_now = moment.tz('Asia/Jakarta').format('HH')
              var ucapanWaktu = 'Good morning 🌄'
              var thumb = thumb = fs.readFileSync('./src/jpg/pagi.jpg')
              if (hour_now >= '03' && hour_now <= '04') {
                ucapanWaktu = 'Good morning 🌌'
                thumb = fs.readFileSync('./src/jpg/malam.jpg')
              } else if (hour_now >= '04' && hour_now <= '09') {
                ucapanWaktu = 'Good morning 🌄'
                thumb = fs.readFileSync('./src/jpg/pagi.jpg') 
              } else if (hour_now >= '10' && hour_now <= '15'){
                ucapanWaktu = 'Good Afternoon ☀️'
                thumb = fs.readFileSync('./src/jpg/siang.jpg')
              } else if (hour_now >= '16' && hour_now <= '17') {
                ucapanWaktu = 'Good Evening ☀️'
                thumb = fs.readFileSync('./src/jpg/sore.jpg')
              } else if (hour_now >= '18' && hour_now <= '19') {
                ucapanWaktu = 'Good Night 🌠'
                thumb = fs.readFileSync('./src/jpg/malam.jpg')
              } else if (hour_now >= '20' && hour_now <= '23') {
                ucapanWaktu = 'Good Night 🌌'
                thumb = fs.readFileSync('./src/jpg/malam.jpg')
              } else {
                ucapanWaktu = 'Good Night'//'Selamat Malam!'
                thumb = fs.readFileSync('./src/jpg/malam2.jpg')
              }
              //MASEHI
              let tw = new Date();
              if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
              else (a=tw.getTime());
              tw.setTime(a);
              let tahun= tw.getFullYear ();
              let hari= tw.getDay ();
              let bulan= tw.getMonth ();
              let tanggal= tw.getDate ();
              let hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
              let bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
              let time = `${hariarray[hari]} ${tanggal} ${bulanarray[bulan]} ${tahun} M`
              const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
              const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
              const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
              //HIJRIAH
              let locale = "id";
              let d = new Date();
              let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
              const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
              let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(d);
              let week = d.toLocaleDateString(locale, { weekday: "long" });
              let date = d.toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
                anu = `*╔━━━━━━━━━━━━━━━━━━━━━━━━━━━╗*
*┃ 《《《《《《《《《◇》》》》》》》》》┃*         
*╚╦━━━━━━━━━━━━━━━━━━━━━━━━━━╝*
*╔╣*
*┃┃ Halo ${pushname} 👋🤗*
*┃┃ Welcome to ${global.footer}*
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ BOT STATUS ⌘*
*┃┃* 
*┃┃ ⌗ Speed* : ${latensi.toFixed(4)} millisecond
*┃┃ ⌗ Runtime* : ${runtime(process.uptime())}
*┃┃ ⌗ Bot Name* : alica-BOTz
*┃┃ ⌗ Bot recoder* : ${global.author}
*┃┃ ⌗ Bot template* : Hisoka-Morou
*┃┃ ⌗ Bot Creator* : DikaArdnt
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ NOTE ⌘*
*┃┃*
*┃┃  BOT INI MASIH DALAM*
*┃┃  PENGEMBANGAN, MOHON MAAF* 
*┃┃  JIKA MASIH AD BUG*
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ DATE ⌘*
*┃┃*
*┃┃ ⌗ MASEHI: ${time}*
*┃┃ ⌗ HIJRIAH: ${dateIslamic}* 
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃ ⌘ SILAHKAN PILIH ⌘*
*╚═══━━━━━━━━━━━━━━━━⊏⊐*
`
              let btn = [{
                buttonId: `list`, 
                buttonText: {
                  displayText: 'MENU'
                }, type: 1
              },{
                buttonId: `semua`,
                buttonText: {
                  displayText: 'ALL MENU'
                }, type: 1
              }] 
              hisoka.sendMessage(m.chat, {
                contextInfo: {
                  mentionedJid: [user],
                  "externalAdReply": { 
                    "title": `${ucapanWaktu}`,
                    "body": `runtime bot ${runtime(process.uptime())}`,
                    "mediaType": 2,
                    "mediaUrl": "https://youtube.com/watch?v=aJRu5ltxXjc",
                    "sourceUrl": "https://dbrtx.github.io/",
                    "thumbnail": thumb
                  }},
                document: global.thumb,
                mimetype: 'application/pdf',
                fileLength : 999999999999999999999,
                pageCount: 1000, 
                fileName : global.footer, 
                caption: anu,
                footer: global.footer,
                buttons: btn,
                headerType: "DOCUMENT"
              },{ quoted: m })

            }
            break
            case 'list': {
              const hour_now = moment.tz('Asia/Jakarta').format('HH')
              var ucapanWaktu = 'Good morning 🌄'
              
              if (hour_now >= '03' && hour_now <= '04') {
                ucapanWaktu = 'Good morning 🌌'
                
              } else if (hour_now >= '04' && hour_now <= '09') {
                ucapanWaktu = 'Good morning 🌄'
                 
              } else if (hour_now >= '10' && hour_now <= '15'){
                ucapanWaktu = 'Good Afternoon ☀️'
                
              } else if (hour_now >= '16' && hour_now <= '17') {
                ucapanWaktu = 'Good Evening ☀️'
                
              } else if (hour_now >= '18' && hour_now <= '19') {
                ucapanWaktu = 'Good Night 🌠'
                
              } else if (hour_now >= '20' && hour_now <= '23') {
                ucapanWaktu = 'Good Night 🌌'
                
              } else {
                ucapanWaktu = 'Good Night'//'Selamat Malam!'
                
              }
              //MASEHI
              let tw = new Date();
              if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
              else (a=tw.getTime());
              tw.setTime(a);
              let tahun= tw.getFullYear ();
              let hari= tw.getDay ();
              let bulan= tw.getMonth ();
              let tanggal= tw.getDate ();
              let hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
              let bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
              let time = `${hariarray[hari]} ${tanggal} ${bulanarray[bulan]} ${tahun} M`
              const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
              const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
              const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
              //HIJRIAH
              let locale = "id";
              let d = new Date();
              let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
              const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
              let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(d);
              let week = d.toLocaleDateString(locale, { weekday: "long" });
              let date = d.toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              let timestamp = speed()
              let latensi = speed() - timestamp
              let sections = [
                      {
                        "title": "Main fitur",
                        "rows": [
                          {
                            "title": "Main menu",
                            "description": "Menampilkan main menu",
                            "rowId": `${prefix}mainmenu`
                          }
                        ]
                      },{
                        "title": "Bot fitur",
                        "rows": [
                          {
                            "title": "Grup menu",
                            "description": "Menampilkan grup menu",
                            "rowId": `${prefix}grupmenu`
                          },{
                            "title": "Downloader menu",
                            "description": "Menampilkan download menu",
                            "rowId": `${prefix}downmenu`
                          },{
                            "title": "Search menu",
                            "description": "Menampilkan search menu",
                            "rowId": `${prefix}searchmenu`
                          },{
                            "title": "Random menu",
                            "description": "Menampilkan random menu",
                            "rowId": `${prefix}randommenu`
                          },{
                            "title": "Text pro menu",
                            "description": "Menampilkan text pro menu",
                            "rowId": `${prefix}textpromenu`
                          },{
                            "title": "Photo oxy menu",
                            "description": "Menampilkan photo oxy menu",
                            "rowId": `${prefix}photooxymenu`
                          },{
                            "title": "Fun menu",
                            "description": "Menampilkan fun menu",
                            "rowId": `${prefix}funmenu`
                          },{
                            "title": "Primbon menu",
                            "description": "Menampilkan primbon menu",
                            "rowId": `${prefix}primbonmenu`
                          },{
                            "title": "Convert menu",
                            "description": "Menampilkan convert menu",
                            "rowId": `${prefix}convertmenu`
                          },{
                            "title": "Database menu",
                            "description": "Menampilkan database menu",
                            "rowId": `${prefix}databasemenu`
                          },{
                            "title": "Voice changer menu",
                            "description": "Menampilkan voice edit menu",
                            "rowId": `${prefix}voicemenu`
                          },{
                            "title": "Islamic menu",
                            "description": "Menampilkan islamic menu",
                            "rowId": `${prefix}islammenu`
                          }
                        ]
                      },{
                        "title": "Anonymous fitur",
                        "rows": [
                          {
                            "title": "Anonymous menu",
                            "description": "Start anonymous chat",
                            "rowId": `${prefix}anonimmenu`
                          }
                        ]
                      },{
                        "title": "Owner fitur",
                        "rows": [
                          {
                            "title": "Owner menu",
                            "description": "Menampilkan fitur khusus owner",
                            "rowId": `${prefix}ownermenu`
                          }
                        ]
                      },{
                        "title": "All",
                        "rows": [
                          {
                            "title": "All menu",
                            "description": "Menampilkan semua menu",
                            "rowId": `*`
                          }
                        ]
                      }
                    ]
              let listMessage = { 
              text: `*╔━━━━━━━━━━━━━━━━━━━━━━━━━━━╗*
*┃ 《《《《《《《《《◇》》》》》》》》》┃*         
*╚╦━━━━━━━━━━━━━━━━━━━━━━━━━━╝*
*╔╣*
*┃┃ Halo ${pushname}*
*┃┃ ${ucapanWaktu}*
*┃┃ Welcome to alica-BOTz* 
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ ⌘ BOT STATUS ⌘*
*┃┃* 
*┃┃ ⌗ Speed* : ${latensi.toFixed(4)} millisecond
*┃┃ ⌗ Runtime* : ${runtime(process.uptime())}
*┃┃ ⌗ Bot Name* : alica-BOTz
*┃┃ ⌗ Bot recoder* : ${global.author}
*┃┃ ⌗ Bot template* : Hisoka-Morou
*┃┃ ⌗ Bot Creator* : DikaArdnt
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ NOTE ⌘*
*┃┃*
*┃┃  BOT INI MASIH DALAM*
*┃┃  PENGEMBANGAN, MOHON MAAF* 
*┃┃  JIKA MASIH AD BUG*
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ DATE ⌘*
*┃┃*
*┃┃ ⌗ MASEHI: ${time}*
*┃┃ ⌗ HIJRIAH: ${dateIslamic}* 
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃ ⌘ PILIH MENU ⌘*
*╚═━━━━━━━━━━━━━━━━⊏⊐*
`,
                footer: global.footer,
                buttonText: "Menu",
                sections            
                }
              hisoka.sendMessage(m.chat, listMessage, { quoted: m })
            }
            break
            case 'semua': case '*': case 'all': {
              let timestamp = speed()
              let latensi = speed() - timestamp
              thumb = fs.readFileSync('./all.jpg')  
                //-----------JAM-------------
              const hour_now = moment.tz('Asia/Jakarta').format('HH')
              var ucapanWaktu = 'Good morning 🌄'
              if (hour_now >= '03' && hour_now <= '04') {
                ucapanWaktu = 'Good morning 🌌'
                
              } else if (hour_now >= '04' && hour_now <= '09') {
                ucapanWaktu = 'Good morning 🌄'
                 
              } else if (hour_now >= '10' && hour_now <= '15'){
                ucapanWaktu = 'Good Afternoon ☀️'
                
              } else if (hour_now >= '16' && hour_now <= '17') {
                ucapanWaktu = 'Good Evening ☀️'
                
              } else if (hour_now >= '18' && hour_now <= '19') {
                ucapanWaktu = 'Good Night 🌠'
                
              } else if (hour_now >= '20' && hour_now <= '23') {
                ucapanWaktu = 'Good Night 🌌'
                
              } else {
                ucapanWaktu = 'Good Night'//'Selamat Malam!'
              }
              //MASEHI
              let tw = new Date();
              if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
              else (a=tw.getTime());
              tw.setTime(a);
              let tahun= tw.getFullYear ();
              let hari= tw.getDay ();
              let bulan= tw.getMonth ();
              let tanggal= tw.getDate ();
              let hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
              let bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
              let time = `${hariarray[hari]} ${tanggal} ${bulanarray[bulan]} ${tahun} M`
              const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
              const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
              const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
              //HIJRIAH
              let locale = "id";
              let d = new Date();
              let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
              const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
              let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(d);
              let week = d.toLocaleDateString(locale, { weekday: "long" });
              let date = d.toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
                anu = `*╔━━━━━━━━━━━━━━━━━━━━━━━━━━━╗*
*┃ 《《《《《《《《《◇》》》》》》》》》┃*         
*╚╦━━━━━━━━━━━━━━━━━━━━━━━━━━╝*
*╔╣*
*┃┃ Halo ${pushname}*
*┃┃ Welcome to ${global.footer}* 
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ BOT STATUS ⌘*
*┃┃* 
*┃┃ ⌗ Speed* : ${latensi.toFixed(4)} millisecond
*┃┃ ⌗ Runtime* : ${runtime(process.uptime())}
*┃┃ ⌗ Bot Name* : alica-BOTz
*┃┃ ⌗ Bot recoder* : ${global.author}
*┃┃ ⌗ Bot template* : Hisoka-Morou
*┃┃ ⌗ Bot Creator* : DikaArdnt
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣    ⌘ DATE ⌘*
*┃┃*
*┃┃ ⌗ MASEHI: ${time}*
*┃┃ ⌗ HIJRIAH: ${dateIslamic}* 
*┃┃*
*┃╚━━━━━━━━━━━━━━━━⊏⊐*
*┃ ⌘ PILIH MENU ⌘* ${readmore}
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Group Menu*
*┃┃*
*┃┃* ◆ ${prefix}linkgroup
*┃┃* ◆ ${prefix}ephemeral [option]
*┃┃* ◆ ${prefix}setppgc [image]
*┃┃* ◆ ${prefix}setname [text]
*┃┃* ◆ ${prefix}setdesc [text]
*┃┃* ◆ ${prefix}group [option]
*┃┃* ◆ ${prefix}editinfo [option]
*┃┃* ◆ ${prefix}add @user
*┃┃* ◆ ${prefix}kick @user
*┃┃* ◆ ${prefix}hidetag [text]
*┃┃* ◆ ${prefix}tagall [text]
*┃┃* ◆ ${prefix}antilink [on/off]
*┃┃* ◆ ${prefix}mute [on/off]
*┃┃* ◆ ${prefix}promote @user
*┃┃* ◆ ${prefix}demote @user
*┃┃* ◆ ${prefix}vote [text]
*┃┃* ◆ ${prefix}devote
*┃┃* ◆ ${prefix}upvote
*┃┃* ◆ ${prefix}cekvote
*┃┃* ◆ ${prefix}hapusvote
*┃┃* ◆ ${prefix}hidetag
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐* 
*╠╣ Downloader Menu*
*┃┃*
*┃┃* ◆ ${prefix}gitclone
*┃┃* ◆ ${prefix}tiktoknowm [url]
*┃┃* ◆ ${prefix}tiktokwm [url] 
*┃┃* ◆ ${prefix}tiktokmp3 [url]
*┃┃* ◆ ${prefix}instagram [url] 
*┃┃* ◆ ${prefix}ytmp3 [url]
*┃┃* ◆ ${prefix}ytmp4 [url]
*┃┃* ◆ ${prefix}getmusic [query]
*┃┃* ◆ ${prefix}getvideo [query]
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Search Menu*
*┃┃*
*┃┃* ◆ ${prefix}gsmarena [query]
*┃┃* ◆ ${prefix}play [query]
*┃┃* ◆ ${prefix}yts [query]
*┃┃* ◆ ${prefix}google [query]
*┃┃* ◆ ${prefix}gimage [query]
*┃┃* ◆ ${prefix}pinterest [query]
*┃┃* ◆ ${prefix}wallpaper [query]
*┃┃* ◆ ${prefix}wikimedia [query]
*┃┃* ◆ ${prefix}ytsearch [query]
*┃┃* ◆ ${prefix}ringtone [query]
*┃┃* ◆ ${prefix}stalk [option] [query]
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Random Menu*
*┃┃*
*┃┃* ◆ ${prefix}coffe
*┃┃* ◆ ${prefix}quotesanime
*┃┃* ◆ ${prefix}motivasi
*┃┃* ◆ ${prefix}memeindo (new)
*┃┃* ◆ ${prefix}katailham (new)
*┃┃* ◆ ${prefix}bucin (new)
*┃┃* ◆ ${prefix}pakboy (new)
*┃┃* ◆ ${prefix}puisi
*┃┃* ◆ ${prefix}couple
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Text Pro Menu*
*┃┃*
*┃┃* ◆ ${prefix}demon
*┃┃* ◆ ${prefix}magma
*┃┃* ◆ ${prefix}glitch
*┃┃* ◆ ${prefix}devil
*┃┃* ◆ ${prefix}graffiti
*┃┃* ◆ ${prefix}skeleton
*┃┃* ◆ ${prefix}blackpink
*┃┃* ◆ ${prefix}cloud
*┃┃* ◆ ${prefix}blood
*┃┃* ◆ ${prefix}firework
*┃┃* ◆ ${prefix}lava
*┃┃* ◆ ${prefix}toxic
*┃┃* ◆ ${prefix}thunder
*┃┃* ◆ ${prefix}thunder2
*┃┃* ◆ ${prefix}neon
*┃┃* ◆ ${prefix}greenneon
*┃┃* ◆ ${prefix}glitter
*┃┃* ◆ ${prefix}glow
*┃┃* ◆ ${prefix}galaxy
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Photo Oxy Menu*
*┃┃*
*┃┃* ◆ ${prefix}shadow
*┃┃* ◆ ${prefix}flaming
*┃┃* ◆ ${prefix}rainbow
*┃┃* ◆ ${prefix}smoke
*┃┃* ◆ ${prefix}neon
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Fun Menu*
*┃┃*
*┃┃* ◆ ${prefix}simih
*┃┃* ◆ ${prefix}halah
*┃┃* ◆ ${prefix}hilih
*┃┃* ◆ ${prefix}huluh
*┃┃* ◆ ${prefix}heleh
*┃┃* ◆ ${prefix}holoh
*┃┃* ◆ ${prefix}jadian
*┃┃* ◆ ${prefix}jodohku
*┃┃* ◆ ${prefix}delttt
*┃┃* ◆ ${prefix}tictactoe
*┃┃* ◆ ${prefix}family100
*┃┃* ◆ ${prefix}tebak [option]
*┃┃* ◆ ${prefix}math [mode]
*┃┃* ◆ ${prefix}suitpvp [@tag]
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Primbon Menu*
*┃┃*
*┃┃* ◆ ${prefix}nomorhoki
*┃┃* ◆ ${prefix}artimimpi
*┃┃* ◆ ${prefix}artinama
*┃┃* ◆ ${prefix}ramaljodoh
*┃┃* ◆ ${prefix}ramaljodohbali
*┃┃* ◆ ${prefix}suamiistri
*┃┃* ◆ ${prefix}ramalcinta
*┃┃* ◆ ${prefix}cocoknama
*┃┃* ◆ ${prefix}pasangan
*┃┃* ◆ ${prefix}jadiannikah
*┃┃* ◆ ${prefix}sifatusaha
*┃┃* ◆ ${prefix}rezeki
*┃┃* ◆ ${prefix}pekerjaan
*┃┃* ◆ ${prefix}nasib
*┃┃* ◆ ${prefix}penyakit
*┃┃* ◆ ${prefix}tarot
*┃┃* ◆ ${prefix}fengshui
*┃┃* ◆ ${prefix}haribaik
*┃┃* ◆ ${prefix}harisangar
*┃┃* ◆ ${prefix}harisial
*┃┃* ◆ ${prefix}nagahari
*┃┃* ◆ ${prefix}arahrezeki
*┃┃* ◆ ${prefix}peruntungan
*┃┃* ◆ ${prefix}weton
*┃┃* ◆ ${prefix}karakter
*┃┃* ◆ ${prefix}keberuntungan
*┃┃* ◆ ${prefix}memancing
*┃┃* ◆ ${prefix}masasubur
*┃┃* ◆ ${prefix}zodiak
*┃┃* ◆ ${prefix}shio
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Convert Menu*
*┃┃*
*┃┃* ◆ ${prefix}attp (new)
*┃┃* ◆ ${prefix}ttp  (new)
*┃┃* ◆ ${prefix}ssweb-pc (new)
*┃┃* ◆ ${prefix}ssweb-hp (new)
*┃┃* ◆ ${prefix}readmore
*┃┃* ◆ ${prefix}wm
*┃┃* ◆ ${prefix}toimage
*┃┃* ◆ ${prefix}removebg
*┃┃* ◆ ${prefix}sticker
*┃┃* ◆ ${prefix}emojimix
*┃┃* ◆ ${prefix}emojimix2
*┃┃* ◆ ${prefix}tovideo
*┃┃* ◆ ${prefix}togif
*┃┃* ◆ ${prefix}tourl
*┃┃* ◆ ${prefix}tovn
*┃┃* ◆ ${prefix}tomp3
*┃┃* ◆ ${prefix}toaudio
*┃┃* ◆ ${prefix}ebinary
*┃┃* ◆ ${prefix}dbinary
*┃┃* ◆ ${prefix}styletext
*┃┃* ◆ ${prefix}smeme (new)
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Main Menu*
*┃┃*
*┃┃* ◆ ${prefix}ping
*┃┃* ◆ ${prefix}owner
*┃┃* ◆ ${prefix}menu / ${prefix}help
*┃┃* ◆ ${prefix}delete
*┃┃* ◆ ${prefix}infochat
*┃┃* ◆ ${prefix}quoted
*┃┃* ◆ ${prefix}listpc
*┃┃* ◆ ${prefix}listgc
*┃┃* ◆ ${prefix}listonline
*┃┃* ◆ ${prefix}speedtest
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Database Menu*
*┃┃*
*┃┃* ◆ ${prefix}setcmd
*┃┃* ◆ ${prefix}listcmd
*┃┃* ◆ ${prefix}delcmd
*┃┃* ◆ ${prefix}lockcmd
*┃┃* ◆ ${prefix}addmsg
*┃┃* ◆ ${prefix}listmsg
*┃┃* ◆ ${prefix}getmsg
*┃┃* ◆ ${prefix}delmsg
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Anonymous Menu*
*┃┃* ◆ ${prefix}anonymous
*┃┃* ◆ ${prefix}start
*┃┃* ◆ ${prefix}next
*┃┃* ◆ ${prefix}keluar
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Islamic Menu*
*┃┃*
*┃┃* ◆ ${prefix}iqra
*┃┃* ◆ ${prefix}hadist
*┃┃* ◆ ${prefix}alquran
*┃┃* ◆ ${prefix}juzamma
*┃┃* ◆ ${prefix}tafsirsurah
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Voice Changer*
*┃┃*
*┃┃* ◆ ${prefix}bass
*┃┃* ◆ ${prefix}blown
*┃┃* ◆ ${prefix}deep
*┃┃* ◆ ${prefix}earrape
*┃┃* ◆ ${prefix}fast
*┃┃* ◆ ${prefix}fat
*┃┃* ◆ ${prefix}nightcore
*┃┃* ◆ ${prefix}reverse
*┃┃* ◆ ${prefix}robot
*┃┃* ◆ ${prefix}slow
*┃┃* ◆ ${prefix}tupai
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃╔━━━━━━━━━━━━━━━━⊏⊐*
*╠╣ Owner Menu*
*┃┃*
*┃┃* ◆ ${prefix}getsesi
*┃┃* ◆ ${prefix}getcase
*┃┃* ◆ ${prefix}react [emoji]
*┃┃* ◆ ${prefix}chat [option]
*┃┃* ◆ ${prefix}join [link]
*┃┃* ◆ ${prefix}leave
*┃┃* ◆ ${prefix}block @user
*┃┃* ◆ ${prefix}unblock @user
*┃┃* ◆ ${prefix}bcgroup [text]
*┃┃* ◆ ${prefix}bcall [text]
*┃┃* ◆ ${prefix}setppbot [image]
*┃┃* ◆ ${prefix}setexif
*┃╚━━━━━━━━━━━━━⊏⊐*
*┃*
*╚═══━━━━━━━━━━━━━⊏⊐*`
              await hisoka.sendMessage(m.chat, {
                document: global.thumb,
                mimetype: 'application/pdf',
                fileLength : 999999999999999999999,
                pageCount: 1000, 
                fileName : footer, 
                caption: anu,
                footer: global.footer,
                buttons: btn,
                headerType: "DOCUMENT",
                contextInfo: {
                  mentionedJid: [user],
                  "externalAdReply": { 
                    "title": `${global.footer}`,
                    "body": `runtime bot ${runtime(process.uptime())}`,
                    "mediaType": 2,
                    "mediaUrl": "https://youtube.com/watch?v=aJRu5ltxXjc",
                    "sourceUrl": "https://dbrtx.github.io/",
                    "thumbnail": thumb
                  } 
                }
              }, { quoted: m })
            }
            break
            case 'grupmenu': {
              thumb = fs.readFileSync('./src/jpg/grup.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Group Menu*
*┃┃*
*┃┃* ◆ ${prefix}linkgroup
*┃┃* ◆ ${prefix}ephemeral [option]
*┃┃* ◆ ${prefix}setppgc [image]
*┃┃* ◆ ${prefix}setname [text]
*┃┃* ◆ ${prefix}setdesc [text]
*┃┃* ◆ ${prefix}group [option]
*┃┃* ◆ ${prefix}editinfo [option]
*┃┃* ◆ ${prefix}add @user
*┃┃* ◆ ${prefix}kick @user
*┃┃* ◆ ${prefix}hidetag [text]
*┃┃* ◆ ${prefix}tagall [text]
*┃┃* ◆ ${prefix}antilink [on/off]
*┃┃* ◆ ${prefix}mute [on/off]
*┃┃* ◆ ${prefix}promote @user
*┃┃* ◆ ${prefix}demote @user
*┃┃* ◆ ${prefix}vote [text]
*┃┃* ◆ ${prefix}devote
*┃┃* ◆ ${prefix}upvote
*┃┃* ◆ ${prefix}cekvote
*┃┃* ◆ ${prefix}hapusvote
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, fs.readFileSync('./src/jpg/grup.jpg'), btn, { quoted: m })
            }
            break 
            case 'downmenu': {
              thumb = fs.readFileSync('./src/jpg/downloader.jpg')
              anu = `

*⌘╔━━━━━━━━━━━━━⊏⊐* 
*╔╣ Downloader Menu*
*┃┃*
*┃┃* ◆ ${prefix}gitclone [url]
*┃┃* ◆ ${prefix}tiktoknowm [url]
*┃┃* ◆ ${prefix}tiktokwm [url] 
*┃┃* ◆ ${prefix}tiktokmp3 [url]
*┃┃* ◆ ${prefix}instagram [url] 
*┃┃* ◆ ${prefix}ytmp3 [url]
*┃┃* ◆ ${prefix}ytmp4 [url]
*┃┃* ◆ ${prefix}getmusic [query]
*┃┃* ◆ ${prefix}getvideo [query]
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*


              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'searchmenu': {
              thumb = fs.readFileSync('./src/jpg/search.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Search Menu*
*┃┃*
*┃┃* ◆ ${prefix}gsmarena [query]
*┃┃* ◆ ${prefix}play [query]
*┃┃* ◆ ${prefix}yts [query]
*┃┃* ◆ ${prefix}google [query]
*┃┃* ◆ ${prefix}gimage [query]
*┃┃* ◆ ${prefix}pinterest [query]
*┃┃* ◆ ${prefix}wallpaper [query]
*┃┃* ◆ ${prefix}wikimedia [query]
*┃┃* ◆ ${prefix}ytsearch [query]
*┃┃* ◆ ${prefix}ringtone [query]
*┃┃* ◆ ${prefix}stalk [option] [query]
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'randommenu': {
              thumb = fs.readFileSync('./src/jpg/random.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Random Menu*
*┃┃*
*┃┃* ◆ ${prefix}quotesanime
*┃┃* ◆ ${prefix}motivasi
*┃┃* ◆ ${prefix}pakboy
*┃┃* ◆ ${prefix}bucin
*┃┃* ◆ ${prefix}katasenja
*┃┃* ◆ ${prefix}couple 
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'textpromenu': {
              thumb = fs.readFileSync('./src/jpg/text_pro.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Text Pro Menu*
*┃┃*
*┃┃* ◆ ${prefix}demon
*┃┃* ◆ ${prefix}magma
*┃┃* ◆ ${prefix}glitch
*┃┃* ◆ ${prefix}devil
*┃┃* ◆ ${prefix}graffiti
*┃┃* ◆ ${prefix}skeleton
*┃┃* ◆ ${prefix}blackpink
*┃┃* ◆ ${prefix}cloud
*┃┃* ◆ ${prefix}blood
*┃┃* ◆ ${prefix}firework
*┃┃* ◆ ${prefix}lava
*┃┃* ◆ ${prefix}toxic
*┃┃* ◆ ${prefix}thunder
*┃┃* ◆ ${prefix}thunder2
*┃┃* ◆ ${prefix}neon
*┃┃* ◆ ${prefix}greenneon
*┃┃* ◆ ${prefix}glitter
*┃┃* ◆ ${prefix}glow
*┃┃* ◆ ${prefix}galaxy
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'photooxymenu': {
              thumb = fs.readFileSync('./src/jpg/photo_oxy.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Photo Oxy Menu*
*┃┃* ◆ ${prefix}shadow
*┃┃* ◆ ${prefix}flaming
*┃┃* ◆ ${prefix}rainbow
*┃┃* ◆ ${prefix}smoke
*┃┃* ◆ ${prefix}neon
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
/**
            case 'ephotomenu': {
              thumb = fs.readFileSync('./lib/ephoto.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Ephoto Menu*
*┃┃*
*┃┃* ◆ ${prefix}ffcover
*┃┃* ◆ ${prefix}crossfire
*┃┃* ◆ ${prefix}galaxy
*┃┃* ◆ ${prefix}glass
*┃┃* ◆ ${prefix}neon
*┃┃* ◆ ${prefix}beach
*┃┃* ◆ ${prefix}blackpink
*┃┃* ◆ ${prefix}igcertificate
*┃┃* ◆ ${prefix}ytcertificate
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break*/
            case 'funmenu': {
              thumb = fs.readFileSync('./src/jpg/fun.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Fun Menu*
*┃┃*
*┃┃* ◆ ${prefix}simih
*┃┃* ◆ ${prefix}halah
*┃┃* ◆ ${prefix}hilih
*┃┃* ◆ ${prefix}huluh
*┃┃* ◆ ${prefix}heleh
*┃┃* ◆ ${prefix}holoh
*┃┃* ◆ ${prefix}jadian
*┃┃* ◆ ${prefix}jodohku
*┃┃* ◆ ${prefix}delttt
*┃┃* ◆ ${prefix}tictactoe
*┃┃* ◆ ${prefix}family100
*┃┃* ◆ ${prefix}tebak [option]
*┃┃* ◆ ${prefix}math [mode]
*┃┃* ◆ ${prefix}suitpvp [@tag]
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'primbonmenu': {
              thumb = fs.readFileSync('./src/jpg/primbon.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Primbon Menu*
*┃┃*
*┃┃* ◆ ${prefix}nomorhoki
*┃┃* ◆ ${prefix}artimimpi
*┃┃* ◆ ${prefix}artinama
*┃┃* ◆ ${prefix}ramaljodoh
*┃┃* ◆ ${prefix}ramaljodohbali
*┃┃* ◆ ${prefix}suamiistri
*┃┃* ◆ ${prefix}ramalcinta
*┃┃* ◆ ${prefix}cocoknama
*┃┃* ◆ ${prefix}pasangan
*┃┃* ◆ ${prefix}jadiannikah
*┃┃* ◆ ${prefix}sifatusaha
*┃┃* ◆ ${prefix}rezeki
*┃┃* ◆ ${prefix}pekerjaan
*┃┃* ◆ ${prefix}nasib
*┃┃* ◆ ${prefix}penyakit
*┃┃* ◆ ${prefix}tarot
*┃┃* ◆ ${prefix}fengshui
*┃┃* ◆ ${prefix}haribaik
*┃┃* ◆ ${prefix}harisangar
*┃┃* ◆ ${prefix}harisial
*┃┃* ◆ ${prefix}nagahari
*┃┃* ◆ ${prefix}arahrezeki
*┃┃* ◆ ${prefix}peruntungan
*┃┃* ◆ ${prefix}weton
*┃┃* ◆ ${prefix}karakter
*┃┃* ◆ ${prefix}keberuntungan
*┃┃* ◆ ${prefix}memancing
*┃┃* ◆ ${prefix}masasubur
*┃┃* ◆ ${prefix}zodiak
*┃┃* ◆ ${prefix}shio
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'convertmenu': {
              thumb = fs.readFileSync('./src/jpg/convert.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Convert Menu*
*┃┃*
*┃┃* ◆ ${prefix}attp 
*┃┃* ◆ ${prefix}ssweb-hp [url]
*┃┃* ◆ ${prefix}ssweb-pc [url]
*┃┃* ◆ ${prefix}ttp 
*┃┃* ◆ ${prefix}toimage
*┃┃* ◆ ${prefix}removebg
*┃┃* ◆ ${prefix}sticker
*┃┃* ◆ ${prefix}emojimix
*┃┃* ◆ ${prefix}emojimix2
*┃┃* ◆ ${prefix}tovideo
*┃┃* ◆ ${prefix}togif
*┃┃* ◆ ${prefix}tourl
*┃┃* ◆ ${prefix}tovn
*┃┃* ◆ ${prefix}tomp3
*┃┃* ◆ ${prefix}toaudio
*┃┃* ◆ ${prefix}ebinary
*┃┃* ◆ ${prefix}dbinary
*┃┃* ◆ ${prefix}styletext
*┃┃* ◆ ${prefix}smeme (new)
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'mainmenu': {
              thumb = fs.readFileSync('./src/jpg/main.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Main Menu*
*┃┃*
*┃┃* ◆ ${prefix}ping
*┃┃* ◆ ${prefix}owner
*┃┃* ◆ ${prefix}menu / ${prefix}help
*┃┃* ◆ ${prefix}delete
*┃┃* ◆ ${prefix}infochat
*┃┃* ◆ ${prefix}quoted
*┃┃* ◆ ${prefix}listpc
*┃┃* ◆ ${prefix}listgc
*┃┃* ◆ ${prefix}listonline
*┃┃* ◆ ${prefix}speedtest
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
             case 'databasemenu': {
              thumb = fs.readFileSync('./src/jpg/database.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Database Menu*
*┃┃*
*┃┃* ◆ ${prefix}setcmd
*┃┃* ◆ ${prefix}listcmd
*┃┃* ◆ ${prefix}delcmd
*┃┃* ◆ ${prefix}lockcmd
*┃┃* ◆ ${prefix}addmsg
*┃┃* ◆ ${prefix}listmsg
*┃┃* ◆ ${prefix}getmsg
*┃┃* ◆ ${prefix}delmsg
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'anonimmenu': {
              thumb = fs.readFileSync('./src/jpg/anonymous.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Anonymous Menu*
*┃┃*
*┃┃* ◆ ${prefix}anonymous
*┃┃* ◆ ${prefix}start
*┃┃* ◆ ${prefix}next
*┃┃* ◆ ${prefix}keluar
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
             case 'islammenu': {
              thumb = fs.readFileSync('./src/jpg/islamic.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Islamic Menu*
*┃┃*
*┃┃* ◆ ${prefix}iqra
*┃┃* ◆ ${prefix}hadist
*┃┃* ◆ ${prefix}alquran
*┃┃* ◆ ${prefix}juzamma
*┃┃* ◆ ${prefix}tafsirsurah
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
             case 'voicemenu': {
              thumb = fs.readFileSync('./src/jpg/voice.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Voice Changer*
*┃┃*
*┃┃* ◆ ${prefix}bass
*┃┃* ◆ ${prefix}blown
*┃┃* ◆ ${prefix}deep
*┃┃* ◆ ${prefix}earrape
*┃┃* ◆ ${prefix}fast
*┃┃* ◆ ${prefix}fat
*┃┃* ◆ ${prefix}nightcore
*┃┃* ◆ ${prefix}reverse
*┃┃* ◆ ${prefix}robot
*┃┃* ◆ ${prefix}slow
*┃┃* ◆ ${prefix}tupai
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
             case 'ownermenu': {
              thumb = fs.readFileSync('./src/jpg/owner.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Owner Menu*
*┃┃*
*┃┃* ◆ ${prefix}getsesi
*┃┃* ◆ ${prefix}getcase
*┃┃* ◆ ${prefix}kirim
*┃┃* ◆ ${prefix}chat [option]
*┃┃* ◆ ${prefix}join [link]
*┃┃* ◆ ${prefix}leave
*┃┃* ◆ ${prefix}block @user
*┃┃* ◆ ${prefix}unblock @user
*┃┃* ◆ ${prefix}bcgroup [text]
*┃┃* ◆ ${prefix}bcall [text]
*┃┃* ◆ ${prefix}setppbot [image]
*┃┃* ◆ ${prefix}setexif
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
            case 'hidemenu': case 'hide':{
              thumb = fs.readFileSync('./lib/owner.jpg')
              anu = `
*⌘╔━━━━━━━━━━━━━⊏⊐*
*╔╣ Owner Menu*
*┃┃*
*┃┃* ◆ ${prefix}anime ☢  
*┃┃* ◆ ${prefix}waifu  ☢ 
*┃┃* ◆ ${prefix}husbu  ☢
*┃┃* ◆ ${prefix}neko  ☢
*┃┃* ◆ ${prefix}shinobu ☢  
*┃┃* ◆ ${prefix}waifus (nsfw)  ☢
*┃┃* ◆ ${prefix}nekos (nsfw)  ☢
*┃┃* ◆ ${prefix}trap (nsfw)  ☢
*┃┃* ◆ ${prefix}blowjob (nsfw) ☢  
*╚╣*
*⌘╚━━━━━━━━━━━━━⊏⊐*

              `
              await sendButDoc(m.chat, anu, global.footer, thumb, btn, { quoted: m })
            }
            break
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replay(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replay(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) {
                      replay(mess.owner)
                      break
                    }
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

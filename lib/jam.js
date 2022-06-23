const moment = require('moment-timezone')
const fs = require('fs')
const hour_now = moment.tz('Asia/Jakarta').format('HH')
var ucapanWaktu = 'Good morning 🌄'
var thumb = thumb = fs.readFileSync('./lib/pagi.jpg')
if (hour_now >= '03' && hour_now <= '10') {
  ucapanWaktu = 'Good morning 🌄'
  thumb = fs.readFileSync('./lib/pagi.jpg')
} else if (hour_now >= '10' && hour_now <= '14') {
  ucapanWaktu = 'Good Afternoon 🌞'
  thumb = fs.readFileSync('./lib/siang.jpg')
} else if (hour_now >= '14' && hour_now <= '17') {
  ucapanWaktu = 'Good Evening ☀️'
  thumb = fs.readFileSync('./lib/sore.jpg')
} else if (hour_now >= '17' && hour_now <= '18') {
  ucapanWaktu = 'Good Night 🌠'
  thumb = fs.readFileSync('./lib/malam.jpg')
} else if (hour_now >= '18' && hour_now <= '23') {
  ucapanWaktu = 'Good Night 🌌'
  thumb = fs.readFileSync('./lib/malam.jpg')
} else {
  ucapanWaktu = 'Good Night'//'Selamat Malam!'
  thumb = fs.readFileSync('./lib/malam.jpg')
}
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

module.export(time, wib)

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getrate', function (req, res) {
    mail_type = req.query.mail_type;
    item_weight = req.query.item_weight;

    if (mail_type == "stamped_letter") {
      if (item_weight <= 1) {
        item_rate = "$0.55"
      }
      else if (item_weight <= 2) {
        item_rate = "$0.70"
      }
      else if (item_weight <= 3) {
        item_rate = "$0.85"
      }
      else if (item_weight <= 3.5) {
        item_rate = "$1.00"
      }
      else if (item_weight <= 4) {
        item_rate = "$1.45"
      }
      else if (item_weight <= 5) {
        item_rate = "$1.60"
      }
      else if (item_weight <= 6) {
        item_rate = "$1.75"
      }
      else if (item_weight <= 7) {
        item_rate = "$1.90"
      }
      else if (item_weight <= 8) {
        item_rate = "$2.05"
      }
      else if (item_weight <= 9) {
        item_rate = "$2.20"
      }
      else if (item_weight <= 10) {
        item_rate = "$2.35"
      }
      else if (item_weight <= 11) {
        item_rate = "2.50"
      }
      else if (item_weight <=12) {
        item_rate = "$2.65"
      }
      else if (item_weight <= 13) {
        item_rate = "$2.80"
      }
    }

    if (mail_type == "metered_letter") {
      if (item_weight <= 1) {
        item_rate = "$0.50"
      }
      else if (item_weight <= 2) {
        item_rate = "$0.65"
      }
      else if (item_weight <= 3) {
        item_rate = "$0.80"
      }
      else if (item_weight <= 3.5) {
        item_rate = "$0.95"
      }
      else if (item_weight <= 4) {
        item_rate = "$1.45"
      }
      else if (item_weight <= 5) {
        item_rate = "$1.60"
      }
      else if (item_weight <= 6) {
        item_rate = "$1.75"
      }
      else if (item_weight <= 7) {
        item_rate = "$1.90"
      }
      else if (item_weight <= 8) {
        item_rate = "$2.05"
      }
      else if (item_weight <= 9) {
        item_rate = "$2.20"
      }
      else if (item_weight <= 10) {
        item_rate = "$2.35"
      }
      else if (item_weight <= 11) {
        item_rate = "2.50"
      }
      else if (item_weight <=12) {
        item_rate = "$2.65"
      }
      else if (item_weight <= 13) {
        item_rate = "$2.80"
      }

    }
    if (mail_type == "large_envelope") {
      if (item_weight <= 1) {
        item_rate = "$1.00"
      }
      else if (item_weight <= 2) {
        item_rate = "$1.15"
      }
      else if (item_weight <= 3) {
        item_rate = "$1.30"
      }
      else if (item_weight <= 4) {
        item_rate = "$1.45"
      }
      else if (item_weight <= 5) {
        item_rate = "$1.60"
      }
      else if (item_weight <= 6) {
        item_rate = "$1.75"
      }
      else if (item_weight <= 7) {
        item_rate = "$1.90"
      }
      else if (item_weight <= 8) {
        item_rate = "$2.05"
      }
      else if (item_weight <= 9) {
        item_rate = "$2.20"
      }
      else if (item_weight <= 10) {
        item_rate = "$2.35"
      }
      else if (item_weight <= 11) {
        item_rate = "2.50"
      }
      else if (item_weight <=12) {
        item_rate = "$2.65"
      }
      else if (item_weight <= 13) {
        item_rate = "$2.80"
      }
    }
    if (mail_type == "first_class") {
      if (item_weight <= 1) {
        item_rate = "$3.66"
      }
      else if (item_weight <= 2) {
        item_rate = "$3.66"
      }
      else if (item_weight <= 3) {
        item_rate = "$3.66"
      }
      else if (item_weight <= 4) {
        item_rate = "$3.66"
      }
      else if (item_weight <= 5) {
        item_rate = "$4.39"
      }
      else if (item_weight <= 6) {
        item_rate = "$4.39"
      }
      else if (item_weight <= 7) {
        item_rate = "$4.39"
      }
      else if (item_weight <= 8) {
        item_rate = "$4.39"
      }
      else if (item_weight <= 9) {
        item_rate = "$5.19"
      }
      else if (item_weight <= 10) {
        item_rate = "$5.19"
      }
      else if (item_weight <= 11) {
        item_rate = "5.19"
      }
      else if (item_weight <=12) {
        item_rate = "$5.19"
      }
      else if (item_weight <= 13) {
        item_rate = "$5.71"
      }
    }
    //JSON FORMAT--{postage_cost: item_rate}
    requestedmailrate = {weight: item_weight, type: mail_type, postage_cost: item_rate}
    res.render ("yourmailrate", requestedmailrate)


  })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

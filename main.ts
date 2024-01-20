enum RadioMessage {
    message1 = 49434,
    reset = 40993
}
radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        ziffer1 = value
    }
    if (name == "b") {
        ziffer2 = value
    }
    if (name == "c") {
        ziffer3 = value
    }
})
let ziffer3 = 0
let ziffer2 = 0
let ziffer1 = 0
radio.setGroup(1)
let zahl = 0
ziffer1 = 0
ziffer1 = 0
ziffer1 = 0
basic.forever(function () {
    zahl = 100 * ziffer1 + (10 * ziffer2 + ziffer3)
    if (zahl == 473) {
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        ziffer1 = 0
        ziffer2 = 0
        ziffer3 = 0
        radio.sendMessage(RadioMessage.reset)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

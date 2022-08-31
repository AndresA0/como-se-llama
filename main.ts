input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Callese")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.NorthEast)
})

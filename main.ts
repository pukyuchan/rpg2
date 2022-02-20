function 隊列 (Sprite_前: Sprite, Sprite_後: Sprite, 距離: number) {
    if (対角線の長さ(Sprite_前.x - Sprite_後.x, Sprite_前.y - Sprite_後.y) > 距離) {
        Sprite_後.follow(Sprite_前, 80)
    } else {
        Sprite_後.follow(Sprite_前, 0)
    }
}
function マップ設定 (数値: number) {
    if (数値 == 0) {
        tiles.setTilemap(tilemap`レベル1`)
    } else if (数値 == 1) {
        tiles.setTilemap(tilemap`川の洞窟`)
        一軒家入口a.destroy()
        グレア町入口.destroy()
        洞窟入口a.destroy()
    } else if (数値 == 2) {
        tiles.setTilemap(tilemap`ポツンと一軒家その２`)
        一軒家入口a.destroy()
        グレア町入口.destroy()
        洞窟入口a.destroy()
        グレあま城入口.destroy()
    } else if (数値 == 3) {
        tiles.setCurrentTilemap(tilemap`グレア町`)
        一軒家入口a.destroy()
        グレア町入口.destroy()
        洞窟入口a.destroy()
        グレあま城入口.destroy()
    } else if (数値 == 4) {
        tiles.setCurrentTilemap(tilemap`レベル10`)
        一軒家入口a.destroy()
        グレア町入口.destroy()
        洞窟入口a.destroy()
        グレあま城入口.destroy()
    } else {
    	
    }
}
function 対角線の長さ (x: number, y: number) {
    return Math.sqrt(x * x + y * y)
}
let グレあま城入口: Sprite = null
let グレア町入口: Sprite = null
let 一軒家入口a: Sprite = null
let 洞窟入口a: Sprite = null
scene.setBackgroundColor(7)
マップ設定(0)
let 赤 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f . . . 2 2 2 2 2 . . . . . . 
    . f . 2 2 2 2 2 2 2 2 . . . . . 
    . f 2 2 2 2 2 1 2 2 2 . . . . . 
    . f . 1 1 f 1 1 f 1 1 . . . . . 
    . f . 1 1 f 1 1 f 1 1 . . . . . 
    . f . 1 1 1 1 1 1 1 1 . . . . . 
    f f f . 1 1 1 1 1 1 . . . . . . 
    . 1 1 2 f 2 2 2 2 2 2 . . . . . 
    . 1 1 2 2 f f 2 2 2 2 2 . . . . 
    . . . . 2 2 2 f f 2 2 2 . . . . 
    . . . . 2 2 2 2 2 f 1 1 . . . . 
    . . . . 8 8 8 8 8 8 1 1 . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let 青 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 6 8 6 9 6 . . . . . . 
    . . . 6 9 6 6 6 6 6 9 . . . . . 
    . . 6 8 6 9 8 1 8 8 8 . . . . . 
    . . . 1 1 f 1 1 f 1 1 . . . . . 
    . . 2 1 1 f 1 1 f 1 1 . . . . . 
    . 2 2 1 1 1 1 1 1 1 1 . . . . . 
    . 1 2 . 1 1 1 1 1 1 . . . . . . 
    . 1 1 8 8 8 8 8 8 8 8 . . . . . 
    . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . 6 6 6 6 6 6 1 1 . . . . 
    . . . . 8 8 8 8 6 6 1 1 . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let 黄 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 7 5 5 7 7 . . . . . . 
    . . . 5 7 5 7 7 5 5 5 . . . . . 
    . . . 7 5 5 7 5 5 7 7 . . . . . 
    2 2 . 1 1 f 1 1 f 1 1 . . . . . 
    2 2 . 1 1 f 1 1 f 1 1 . . . . . 
    . b . 1 1 1 1 1 1 1 1 . . . . . 
    . b . . 1 1 1 1 1 1 . . . . . . 
    . 1 1 5 7 7 5 5 7 5 5 . . . . . 
    . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
    . b 7 5 5 5 f f 5 7 7 5 . . . . 
    . b 5 7 5 f f f 5 5 5 5 . . . . 
    . b 5 5 7 6 6 6 7 5 7 7 . . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
洞窟入口a = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f b b b b b b b b f . . . 
    . . f b f f f f f f f f b f . . 
    . . f b f f f f f f f f b f . . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f b f f f f f f f f f f b f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
一軒家入口a = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f f . . . 
    . . f f e e e e e e e e e f . . 
    . f e e e e e e e e e e e e f . 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 f f f f f f f f 5 5 5 5 f 
    f 5 5 f 9 9 f 9 9 9 f 5 5 5 5 f 
    f 5 5 f f f f f f f f 5 5 5 5 f 
    f 5 5 f 9 9 f 9 9 9 f 5 5 5 5 f 
    f 5 5 f f f f f f f f 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
グレア町入口 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f f . . 
    . . . . . f f 8 8 8 8 8 8 8 f . 
    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
    . . . f f f f f f 8 8 8 8 8 8 f 
    . f f 2 2 2 2 2 2 f f f f f f f 
    . f 2 2 2 2 2 2 2 2 f d d d f . 
    f 2 2 2 2 2 2 2 2 2 2 f f f f . 
    f f f f f f f f f f f f 9 f f . 
    . f d d d d d d d d f 9 9 f f . 
    . f d f f f f f d d f f f f f . 
    . f d f 9 f 9 f d d f d d d f . 
    . f d f f f f f d d f f f f f . 
    . f d d d d d d d d f . . . . . 
    . f f f f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
グレあま城入口 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f . . f f . . f f . . . . 
    . f b b f f b b f f b b f . . . 
    f b b b b f b b f b b b b f . . 
    f f f f f f f f f f f f f f . . 
    . f b b f b b b b f b b f . . . 
    . f b b f b b b b f b b f . . . 
    . f b b f b b b b f b b f . . . 
    . f b b f b f f b f b b f . . . 
    . f b b f f f f f f b b f . . . 
    . f b b f f f f f f b b f . . . 
    . f f f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(赤)
controller.moveSprite(赤, 70, 70)
赤.setPosition(91, 53)
青.setPosition(63, 53)
黄.setPosition(131, 53)
洞窟入口a.setPosition(88, 345)
一軒家入口a.setPosition(72, 88)
グレア町入口.setPosition(664, 168)
グレあま城入口.setPosition(248, 376)
forever(function () {
    while (controller.left.isPressed()) {
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            f f f 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 2 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 . . . . . 
            . . . 2 2 f f 2 2 2 2 2 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f 1 1 . . . . 
            . . . . f f f 8 8 8 . . . . . . 
            . . . . f f f . 8 8 . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 f 1 1 f 1 1 . . . . . 
            . 1 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . f f f 8 6 6 1 1 . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            2 2 . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . b 5 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f 5 5 5 5 . . . . 
            . . 5 f f f 6 6 7 5 7 7 . . . . 
            . . . f f f . 6 6 6 . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 1 1 1 1 1 1 . . . . . 
            f f f . 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 2 . . . . 
            . 1 1 2 2 f f 2 2 2 1 1 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f . . . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . 8 8 . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . . 1 1 f 1 1 f 1 1 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 2 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
            . 1 1 8 8 8 8 8 8 8 1 1 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            . . . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . b . . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f f f 5 5 . . . . 
            . b 5 5 7 6 6 f f f 7 7 . . . . 
            . . . 6 6 6 . f f f . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
    }
    while (controller.up.isPressed()) {
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            f f f 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 2 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 . . . . . 
            . . . 2 2 f f 2 2 2 2 2 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f 1 1 . . . . 
            . . . . f f f 8 8 8 . . . . . . 
            . . . . f f f . 8 8 . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 f 1 1 f 1 1 . . . . . 
            . 1 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . f f f 8 6 6 1 1 . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            2 2 . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . b 5 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f 5 5 5 5 . . . . 
            . . 5 f f f 6 6 7 5 7 7 . . . . 
            . . . f f f . 6 6 6 . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 1 1 1 1 1 1 . . . . . 
            f f f . 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 2 . . . . 
            . 1 1 2 2 f f 2 2 2 1 1 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f . . . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . 8 8 . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . . 1 1 f 1 1 f 1 1 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 2 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
            . 1 1 8 8 8 8 8 8 8 1 1 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            . . . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . b . . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f f f 5 5 . . . . 
            . b 5 5 7 6 6 f f f 7 7 . . . . 
            . . . 6 6 6 . f f f . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
    }
    while (controller.right.isPressed()) {
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            f f f 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 2 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 . . . . . 
            . . . 2 2 f f 2 2 2 2 2 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f 1 1 . . . . 
            . . . . f f f 8 8 8 . . . . . . 
            . . . . f f f . 8 8 . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 f 1 1 f 1 1 . . . . . 
            . 1 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . f f f 8 6 6 1 1 . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            2 2 . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . b 5 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f 5 5 5 5 . . . . 
            . . 5 f f f 6 6 7 5 7 7 . . . . 
            . . . f f f . 6 6 6 . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 1 1 1 1 1 1 . . . . . 
            f f f . 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 2 . . . . 
            . 1 1 2 2 f f 2 2 2 1 1 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f . . . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . 8 8 . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . . 1 1 f 1 1 f 1 1 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 2 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
            . 1 1 8 8 8 8 8 8 8 1 1 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            . . . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . b . . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f f f 5 5 . . . . 
            . b 5 5 7 6 6 f f f 7 7 . . . . 
            . . . 6 6 6 . f f f . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
    }
    while (controller.down.isPressed()) {
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            f f f 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 2 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 . . . . . 
            . . . 2 2 f f 2 2 2 2 2 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f 1 1 . . . . 
            . . . . f f f 8 8 8 . . . . . . 
            . . . . f f f . 8 8 . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 f 1 1 f 1 1 . . . . . 
            . 1 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . f f f 8 6 6 1 1 . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f f . f f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            2 2 . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . 1 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . b 5 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f 5 5 5 5 . . . . 
            . . 5 f f f 6 6 7 5 7 7 . . . . 
            . . . f f f . 6 6 6 . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
        赤.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . 2 2 2 2 2 . . . . . . 
            . f . 2 2 2 2 2 2 2 2 . . . . . 
            . f 2 2 2 2 2 1 2 2 2 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 f 1 1 f 1 1 . . . . . 
            . f . 1 1 1 1 1 1 1 1 . . . . . 
            f f f . 1 1 1 1 1 1 . . . . . . 
            . 1 1 2 f 2 2 2 2 2 2 2 . . . . 
            . 1 1 2 2 f f 2 2 2 1 1 . . . . 
            . . . . 2 2 2 f f 2 1 1 . . . . 
            . . . . 2 2 2 2 2 f . . . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . 8 8 . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        青.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 8 6 9 6 . . . . . . 
            . . . 6 9 6 6 6 6 6 9 . . . . . 
            . . 6 8 6 9 8 1 8 8 8 . . . . . 
            . . . 1 1 f 1 1 f 1 1 . . . . . 
            . . 2 1 1 f 1 1 f 1 1 . . . . . 
            . 2 2 1 1 1 1 1 1 1 1 . . . . . 
            . 1 2 . 1 1 1 1 1 1 . . . . . . 
            . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
            . 1 1 8 8 8 8 8 8 8 1 1 . . . . 
            . . . . 6 6 6 6 6 6 1 1 . . . . 
            . . . . 8 8 8 f f f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . f f f . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        黄.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 7 5 5 7 7 . . . . . . 
            . . . 5 7 5 7 7 5 5 5 . . . . . 
            . . . 7 5 5 7 5 5 7 7 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            2 2 . 1 1 f 1 1 f 1 1 . . . . . 
            . b . 1 1 1 1 1 1 1 1 . . . . . 
            . b . . 1 1 1 1 1 1 . . . . . . 
            . 1 1 5 7 7 5 5 7 5 5 . . . . . 
            . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
            . b 7 5 5 5 f f 5 7 7 5 . . . . 
            . b 5 7 5 f f f f f 5 5 . . . . 
            . b 5 5 7 6 6 f f f 7 7 . . . . 
            . . . 6 6 6 . f f f . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
    }
    赤.setImage(img`
        . . . . . . . . . . . . . . . . 
        . f . . . 2 2 2 2 2 . . . . . . 
        . f . 2 2 2 2 2 2 2 2 . . . . . 
        . f 2 2 2 2 2 1 2 2 2 . . . . . 
        . f . 1 1 f 1 1 f 1 1 . . . . . 
        . f . 1 1 f 1 1 f 1 1 . . . . . 
        . f . 1 1 1 1 1 1 1 1 . . . . . 
        f f f . 1 1 1 1 1 1 . . . . . . 
        . 1 1 2 f 2 2 2 2 2 2 . . . . . 
        . 1 1 2 2 f f 2 2 2 2 2 . . . . 
        . . . . 2 2 2 f f 2 2 2 . . . . 
        . . . . 2 2 2 2 2 f 1 1 . . . . 
        . . . . 8 8 8 8 8 8 1 1 . . . . 
        . . . . 8 8 . . 8 8 . . . . . . 
        . . . f f f . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    青.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 8 6 9 6 . . . . . . 
        . . . 6 9 6 6 6 6 6 9 . . . . . 
        . . 6 8 6 9 8 1 8 8 8 . . . . . 
        . . . 1 1 f 1 1 f 1 1 . . . . . 
        . . 2 1 1 f 1 1 f 1 1 . . . . . 
        . 2 2 1 1 1 1 1 1 1 1 . . . . . 
        . 1 2 . 1 1 1 1 1 1 . . . . . . 
        . 1 1 8 8 8 8 8 8 8 8 . . . . . 
        . 1 1 8 8 8 8 8 8 8 8 8 . . . . 
        . . . . 6 6 6 6 6 6 1 1 . . . . 
        . . . . 8 8 8 8 6 6 1 1 . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . f f f . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    黄.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 7 5 5 7 7 . . . . . . 
        . . . 5 7 5 7 7 5 5 5 . . . . . 
        . . . 7 5 5 7 5 5 7 7 . . . . . 
        2 2 . 1 1 f 1 1 f 1 1 . . . . . 
        2 2 . 1 1 f 1 1 f 1 1 . . . . . 
        . b . 1 1 1 1 1 1 1 1 . . . . . 
        . b . . 1 1 1 1 1 1 . . . . . . 
        . 1 1 5 7 7 5 5 7 5 5 . . . . . 
        . 1 1 5 7 5 f 5 7 5 7 5 . . . . 
        . b 7 5 5 5 f f 5 7 7 5 . . . . 
        . b 5 7 5 f f f 5 5 5 5 . . . . 
        . b 5 5 7 6 6 6 7 5 7 7 . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . f f f . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
forever(function () {
    pause(1000)
    console.logValue("x", 赤.x)
    console.logValue("y", 赤.y)
    if (赤.overlapsWith(洞窟入口a)) {
        music.knock.playUntilDone()
        マップ設定(1)
        赤.setPosition(21, 119)
        青.setPosition(21, 119)
        黄.setPosition(21, 119)
    }
    if (赤.overlapsWith(一軒家入口a)) {
        music.knock.playUntilDone()
        マップ設定(2)
        赤.setPosition(21, 12)
        青.setPosition(21, 12)
        黄.setPosition(21, 12)
    }
    if (赤.overlapsWith(グレア町入口)) {
        music.knock.playUntilDone()
        マップ設定(3)
        赤.setPosition(18, 239)
        青.setPosition(18, 239)
        黄.setPosition(18, 239)
    }
    if (赤.overlapsWith(グレあま城入口)) {
        music.knock.playUntilDone()
        マップ設定(4)
        赤.setPosition(304, 302)
        青.setPosition(304, 302)
        黄.setPosition(304, 302)
    }
})
forever(function () {
    隊列(赤, 青, 15)
    隊列(青, 黄, 15)
})

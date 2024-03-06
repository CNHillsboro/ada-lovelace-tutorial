# Ada Lovelace

## Step 1

Open the ``||sprites:Sprites||`` toolbox container and drag out a ``||variables:set sprite to||`` block.

Put it into the ``||loops:on start||`` container.

## Step 2

Your sprite needs to move!

Open the ``||controller:Controller||`` toolbox container and drag out ``||controller:move sprite with buttons||``.

Put it underneath your ``||variables:set sprite to||`` block. Make sure the name in the block is correct!

## Step 3

Now we need the camera to follow the player!

Open the ``||scene:Scene||`` toolbox container and drag out a ``||scene:camera follow sprite||`` block.

Place it at the bottom of your code, and make sure the name is correct.

## Step 4

Next, the sprite needs a starting position.

Open the ``||scene:Scene||`` toolbox container and drag out ``||scene:place sprite on top of random tile||``

Put it on the bottom of your code. Make sure the name is right!

Click on the checkered tile selector and select the ``path`` tile.

## Step 4

Your on start should now end with the following:

```blocks
let mySprite = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass3)
```


```package
arcade-text=github:microsoft/arcade-text
```
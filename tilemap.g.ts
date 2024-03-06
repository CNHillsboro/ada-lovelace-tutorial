// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003020202020209020202020202090b0b0501010101010901010101010109010705010101010109090901010101090107050a01010101090101010101010901070909090901010101010109010109010705010109010101010101090101090107050101010101010101010901010101070501010101010101010a090101010107050101010909090909090909090909090501010101010101010101010101010705010a0101010101010101010101010705010101010101010101010101010107050101010101010101010109090101070909090909090101010101090a010107080101010101010101010a090101010708060606060606060606060906060604`, img`
. . . . . . 2 . . . . . . 2 . . 
. . . . . . 2 . . . . . . 2 . . 
. . . . . . 2 2 2 . . . . 2 . . 
. . . . . . 2 . . . . . . 2 . . 
2 2 2 2 . . . . . . 2 . . 2 . . 
. . . 2 . . . . . . 2 . . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
2 2 2 2 2 2 . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,myTiles.tile1,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

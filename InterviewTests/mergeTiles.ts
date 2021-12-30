/*
Image is either black or white, or separated into four tiles, which can be either black or white, or separated into four tiles…(and so on). Merge two images (of said type) with rules.

Rules for any position:
white + white -> white
white + black -> black
black + white -> black
black + black -> black
*/

class Tile {
  constructor(color: string) {
    this.color = color
  }

  subtiles :Tile[] = [];
  color;
}

const merge = (tileOne: Tile, tileTwo: Tile) => {
  if(tileOne.subtiles.length > 0 && tileTwo.subtiles.length>0){
    let resultTile;
    for (let i = 0; i < 4; i++) 
    {
      const tileResult = merge(tileOne.subtiles[i], tileTwo.subtiles[i])
      resultTile.subtiles[i] = tileResult
    }
    return resultTile;
  }
  else {
    if(tileOne.color === tileTwo.color && tileOne.color === 'white'){
      return new Tile ('white')
    } else {
      return new Tile ('black')
    }
  }
}
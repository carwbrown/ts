export class Bottles{
	verse(number: number): string{
		switch(number) {
			case 2: {
				return `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number - 1} bottle of beer on the wall.`
			}
			case 1: {
				return `${number} bottle of beer on the wall, ${number} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`
			}
			case 0: {
				return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
			}
			default: {
				return `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number - 1} bottles of beer on the wall.`
			}
		}
	}

	verses(start: number, end: number): string {
		return Array.from(new Array(start - (end-1)), (x,i) => i + (end)).reverse().map((num: number) => {
			return this.verse(num);
		}).join('\n\n')
	}

	song(): string{
		return this.verses(99, 0);
	}
}
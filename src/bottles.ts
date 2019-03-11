/* 
* //TODO:
* create functions in Bottles class - DONE
* create helper class
* move functions to helper class
* apply polymorphsim principals
*/

export class Bottles{
	verse(number: number): string{
		return `${this.amount(number)} ${this.container(number)} of beer on the wall, ${this.amount(number).toLowerCase()} ${this.container(number)} of beer.
${this.action(number)} ${this.amount(this.subNumber(number)).toLowerCase()} ${this.container(this.subNumber(number))} of beer on the wall.`
	}

	verses(start: number, end: number): string {
		return Array.from(new Array(start - (end-1)), (x,i) => i + (end)).reverse().map((num: number) => {
			return this.verse(num);
		}).join('\n\n')
	}

	song(): string{
		return this.verses(99, 0);
	}

	pronoun(number: number): string{
		if(number === 1){
			return "it";
		}
		return "one"
	}

	container(number: number): string{
		if(number === 1){
			return "bottle";
		}
		return "bottles"
	}

	action(number: number): string{
		if(number === 0){
			return "Go to the store and buy some more,";
		}
		return `Take ${this.pronoun(number)} down and pass it around,`
	}

	amount(number: number): string {
		if(number === 0){
			return "No more"
		}
		return number.toString()
	}

	subNumber(number: number): number {
		if(number === 0){
			return 99
		}
		return number - 1
	}
}
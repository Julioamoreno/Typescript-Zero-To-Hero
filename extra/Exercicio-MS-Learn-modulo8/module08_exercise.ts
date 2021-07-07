namespace Greetings {
	export function returnGreeting<T>(greeting: T) {
		return console.log(greeting);
	}
}
namespace GreetingsWithLength {
	export function returnGreeting(greeting: string) {
		const length = getLength(greeting);
		return console.log(
			`The message contain ${length} characters and its content is: ${greeting}`
		);
	}
	function getLength(greeting: string): number {
		return greeting.length;
	}
}

Greetings.returnGreeting('ola');
GreetingsWithLength.returnGreeting('ola');

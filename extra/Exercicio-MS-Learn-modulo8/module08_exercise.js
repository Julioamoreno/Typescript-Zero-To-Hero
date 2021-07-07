var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        return console.log(greeting);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        var length = getLength(greeting);
        return console.log("The message contain " + length + " characters and its content is: " + greeting);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(greeting) {
        return greeting.length;
    }
})(GreetingsWithLength || (GreetingsWithLength = {}));
Greetings.returnGreeting('ola');
GreetingsWithLength.returnGreeting('ola');

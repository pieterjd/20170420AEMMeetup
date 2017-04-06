//this function return a random fact
use(function () {
    // you can reference the parameters via the this keyword.
    var facts = properties.facts;
    var randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
});
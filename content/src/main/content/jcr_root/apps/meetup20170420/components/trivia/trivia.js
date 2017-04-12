//this function return a random fact and information if an image was uploaded and if so,
// if it should be shown
use(function () {
    var result={};
    var facts = properties.facts;
    var randomIndex = Math.floor(Math.random() * facts.length);
    result.fact = facts[randomIndex];
    result.nrFacts=facts.length;
    result.imageUploaded = resource.getChild('image') != null;
    result.showImage = Math.floor(Math.random() * 100) <= properties.randomCutoffValue;
    return result;
});
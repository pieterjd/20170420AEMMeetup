//this function return a random fact
use(["/libs/wcm/foundation/components/utils/ResourceUtils.js" ],function (ResourceUtils) {
    // you can reference the parameters via the this keyword.
    var result={};
    var facts = properties.facts;
    var randomIndex = Math.floor(Math.random() * facts.length);
    result.fact = facts[randomIndex];
    result.nrFacts=facts.length;
    result.imageUploaded = resource.getChild('image') != null;
    result.showImage = Math.floor(Math.random() * 100) <= properties.randomCutoffValue;
    return result;
});
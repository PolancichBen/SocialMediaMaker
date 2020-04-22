//Data Structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.ecoChemPro = [];
streams.users.innisfree = [];
streams.users.rMFTStore = [];
streams.users.realBama = [];
window.users = Object.keys(streams.users);

// random tweet generator Example
// var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
// var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
// var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
// var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
// var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

//What will I need to generate for each
    // How will I need to structure it
        



//Openings, Verbs, Objects, Nouns, and Tags for Each Company
//Eco Chem Pro Random Tweet Generator
var ecoChemSituationBulk = ['Cleaning the boat?','Cleaning the Ship?','Cleaning the Bus', 'Cleaning the Restaurant?','Cleaning the Factory?','Got a Big Mess?']
var ecoChemSituationNorm = ['Cleaning the boat?','Cleaning the Ship?','Cleaning the Truck?','Cleaning the Bus?','Cleaning the floors?','Cleaning?','Cleaning the Car?','Cleaning the House?','Cleaning the Restaurant?','Cleaning the Factory?','Got a mess?','Looking to clean?','It\'s time to clean!','Need a Strong Degreaser?','It\'s spring cleaning!'];
var ecoChemHandOff = ['Check out our','Get to degreasing with','Grab some of our','Attack the mess with', 'Cut down grease with this', 'Break up grime with this', 'Pick up some of our', 'Use our','Order some of our'];
var ecoChemProductNorm = ['32oz Full Strength Cleaner Degreaser Bottle','32oz Full Strength Cleaner Degreaser Bottle (Case of 8)','32oz Full Strength Cleaner Degreaser Bottle with Gallon', '1 Gallon Bottles (Case of 4)'];
var ecoChemProductBulk = ['5-Gallon Tote Full Strength Cleaner Degreaser','55-Gallon Drum','275-Gallon Cube'];
var ecoChemCloser = ['Check it out here','Try it here','Order here','See more','Find out more','Link'];
var ecoChemLink = ['https://www.ecochempro.com/buy-now'];
var ecoChemTags = ['#Degreaser #EcoChemPro #NonToxic #NonAcidic #EarthFriendly'];




// // Innisfree Random Tweet Generator
// var innisOpening = [];
// var innisVerbs = [];
// var innisObjects = [];
// var innisNouns = [];
// var innisTags = ['#headtothefree','#CurbsideCarryOut','#innisfreettown'];




// // Trick Construction Random Tweet Generator
// var trickConOpening = [];
// var trickConVerbs = [];
// var trickConObjects = [];
// var trickConNouns = [];
// var trickConTags = ['#northportalabama','#tuscaloosa','#RealEstate','#Sale','#NewHomes','#TrickConstruction',];




// // RMFT Store Random Tweet Generator
// var rMFTOpening = [];
// var rMFTVerbs = [];
// var rMFTObjects = [];
// var rMFTNouns = [];
// var rMFTTags = ['#RMFT','#RFT','#BAMA','#RMFTSTORE','#tuscaloosa','#Alabama'];




// // RealBama Store Random Tweet Generator
// var realBamaOpening = [];
// var realBamaVerbs = [];
// var realBamaObjects = [];
// var realBamaNouns = [];
// var realBamaTags = ['#northportalabama','#tuscaloosa','#RealEstate','#RealBama','#Alabama'];



// utility function
var randomElement = function(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  var addTweet = function(newTweet){
    var username = newTweet.user;
    streams.users[username].push(newTweet);
    streams.home.push(newTweet);
  };
  var randomMessage = function(){
    return [randomElement(ecoChemSituationNorm), randomElement(ecoChemHandOff), randomElement(ecoChemProductNorm), randomElement(ecoChemCloser), randomElement(ecoChemLink),randomElement(ecoChemCloser),randomElement(ecoChemCloser),ecoChemTags].join(' ');
  };
  
  var generateRandomTweet = function(){
    var tweet = {};
    tweet.user = randomElement(users);
    tweet.message = randomMessage();
    tweet.created_at = new Date();
    addTweet(tweet);
  };

  for(var i = 0; i < 10; i++){
    generateRandomTweet();
  }
  //Modify

  var scheduleNextTweet = function(){
    generateRandomTweet();
    setTimeout(scheduleNextTweet, Math.random() * 1500);
  };
  scheduleNextTweet();



  // Data structures

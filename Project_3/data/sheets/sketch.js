var allData;

function setup() {
   Tabletop.init( { 
                    key: 'https://docs.google.com/spreadsheets/d/1eLouZhuMJ-2QvoV1abwfkLr8N-VfmOejX6wdG3zua6o/pubhtml',
                    callback: gotCoolData,
                    simpleSheet: true 
     
   } );
   
  // Code for setting up the buttons
   var button = createButton('generate yummy food');
   button.mousePressed(generateIt);
   
   var button2 = createButton('generate yucky food');
   button2.mousePressed(generateItworst);
   
   
}

function gotCoolData(stuff, tabletop) { 
                       allData = stuff;
                   }


// What happens when you press the button
function generateIt(){
  var entry = random(allData);
  createP("The best food ever is " + entry.foodyum);
}

function generateItworst(){
  var entry = random(allData);
  createP("The worst Thanksgiving food is " + entry.worstyum);
}



function draw() {
}
// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/0Mq2CxspF5s

// var txt;

function loadFile() {
  loadStrings("rainbow.txt", fileLoaded);
}

function fileLoaded(data) {
  // txt = data;
  // join and br/ will preserve the line breaks in the file
  createP(join(data, "<br/>"));
}

function fileSelected(file) {
	//this will output to the page name/ size / type 
	// of file that the user selected
  createP(file.name + " " + file.size + " " + file.type);
//some basic error checking to make sure that the
//use only supplies text files
  if (file.type == "text") {
    createP(file.data);
  } else {
    createP("I need a text file. Please try again.");
  }
  console.log(file);
}

function setup() {
  noCanvas();

  createFileInput(fileSelected);

  var button = select("#loadfile");
  button.mousePressed(loadFile);

  // console.log(txt);
}

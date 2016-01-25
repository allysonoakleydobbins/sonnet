//Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet");
var phrase = sonnet.innerHTML; 

//Find and output the starting position of the word "orphans"
alert(phrase.indexOf("orphans"));


//Output the number of characters in the sonnet
alert(phrase.length);


//Replace the first occurance of the string "winter" with "yuletide"
var winter = phrase.replace("winter", ("yuletide"));
alert(winter);

//Replace all occurances of the string "the" with "a large"
var winter2 = phrase.replace(/the/g, "a large");
alert(winter2)


//Set the content of the sonnet div with the new string
sonnet.innerHTML = winter2;
 	
/*
Each question element is div#id_XXX.questionItem_Y (id=id_XXX and class=questionItem_Y), where Y is 0 - 19.
In each question element there is one element with class=actionTile, which is the answer button.
id_XXX.click() opens the answer and explanation.

Next page button has class=pager_forward_btn

Alternative plan:
1. Identify the id's of all elements which are ...questionItemY into an array
2. Identify the id's of all elements which have class "actionTile" and are children of questionItemY
3. click() all actionTile id's
4. getTextFromId() of the first entry in the array from (1.) and copy to variable text
5. getTextFromId() of the first entry in the array from (2.) and copy to variable text
6. Repeat 3 - 4 for the other 19 id's
7. Copy the variable to a file and make it available for download

*/

//This function creates a text file from the text variable provided as an argument
function makeTextFile(text)
{
	var textFile = null;
	var data = new Blob([text], {type: 'text/plain;charset=utf8'});

	// If we are replacing a previously generated file we need to
	// manually revoke the object URL to avoid memory leaks.
	if (textFile !== null) {
		window.URL.revokeObjectURL(textFile);
	}

	textFile = window.URL.createObjectURL(data);

	// returns a URL you can use as a href
	return textFile;
};

//This function clicks the element passed as its argument
function clickElement(arg1)
{
	arg1[0].click();
	return;
}

//This function prints the innerText from an element by its id. 
function getTextFromId(id)
{
	var element = document.getElementById(id);
	var text = element.innerText;
	//console.log(text);
	return text;
}

//This function finds the id of all elements which ends with a certain string and forms an array out of them.
function findElementIdByName(arg1)
{
	//Create an array of all elements which end in a certain string
	//Usually the argument is '[class*=questionItem]'
	const elementArray = Array.from(document.querySelectorAll(arg1));

    //Create an array of all the id's of the elements in elementArray
    const idArray = elementArray.map(({id}) => [id]);
    return idArray;
}

//This function locates the id of the child element with class ".actionTile" in that "arg1" element
function locateAnswerElement(arg1)
{
	var testContainer = document.querySelector("#" + arg1);
	//console.log("testContainer is " + testContainer);
	var ChildNode = testContainer.querySelectorAll(".actionTile");	//ChildNode is a NodeList
	ChildArray = Array.from(ChildNode);	//Converts it to an array
	return ChildArray;

}

//(1.)Forms an array consisting of all the id's of all elements with the string "questionItem" in the class
QuestionIdArray = findElementIdByName('[class*=questionItem]');

//(2.)Creates an array containing the id's of each of the child elements of QuestionIdArray which contain .actionTile
const AnswerIdArray = QuestionIdArray.map(locateAnswerElement);

//(3.)Opens the answer for all questions on the page
AnswerIdArray.forEach(clickElement);
await new Promise(r => setTimeout(r, 500));

//(4.), (5.), and (6.)Iterate through the two arrays and print the innerText contained in each
text = "";
for (let i = 0; i < QuestionIdArray.length; i++)
{
	text = text + getTextFromId(QuestionIdArray[i]) + '\n' + '\n';
}


//(7.)Create a textfile and open the url in a new window
URLtext = makeTextFile(text);
window.open(URLtext)
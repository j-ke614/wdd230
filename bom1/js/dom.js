var button = document.getElementById("submit");
var input = document.getElementById("favchap");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var dlt = document.querySelectorAll(".delete")
//delete button
function delButton(parent) {
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("X"));
	del.className = "delete";
	parent.appendChild(del);	
}
//delete function
function deleteMe() {
	for (var i = 0; i < dlt.length; i++) {
	dlt[i].addEventListener("click", function() {
		this.parentNode.remove();
		})
	}
}

function addToggle() {
	this.classList.toggle("done");
}

function addEntry() {
	if (input.value.length > 0 ) {
		var newItem = document.createElement("li");
		newItem.appendChild(document.createTextNode(input.value));
		ul.appendChild(newItem);	
		newItem.addEventListener("click",addToggle);
		//delete
		delButton(newItem);
		dlt = document.querySelectorAll(".delete");
		deleteMe();
			input.value="";	}
}

button.addEventListener("click", addEntry);
input.addEventListener("keypress", function() {
	if ( event.keyCode === 13 ) {
	addEntry()}
});

for ( var i = 0 ; i < listItem.length; i++) {
	listItem[i].addEventListener("click", addToggle);
	delButton(listItem[i]);
	dlt = document.querySelectorAll(".delete");
}

deleteMe();
var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var searchBtn = document.getElementById('search');
var displayArea = document.getElementById('result');
var messageArea = document.getElementById('messageArea');
var inputData = document.getElementById('input');

var start = null;                                     //to track the start of the list
var end = null;                                       //to track the end of the list

display();

function Node ( data ) {                              //for creating and initializing new node
  this.data = data;
  this.next = null;
  this.previous = null;
}

/*
* A function to add the given element at the rear
* of the list.
*/
function addElement() {
  var data = inputData.value;
  if( data == "" ) {
    messageArea.innerHTML="Element cannot be empty";
    return;
  }
  var node = new Node(data);
  if (start == null) {
    start = node;
    end = node;
  } else {
    end.next = node;
    node.previous = end;
    end = node;
  }
  display();
  inputData.value="";
  messageArea.innerHTML="Element Added!";
}

/* A function to display all the elements in reverse order
* in the List.
*/
function displayReverse(){
  var current = end;
  displayArea.innerHTML="<br>";
  if(end == null){
    messageArea.innerHTML = "No elements to display!!";
    return;
  }
  while ( current != null) {
    displayArea.innerHTML +="<span>"+ current.data + "-></span>";
    current = current.previous;
  }
  displayArea.innerHTML += "null";
  messageArea.innerHTML = "Elements are in reverse order!";
}

/* A function to display all the elements
* in the List.
*/
function display() {
  var current = start;
  displayArea.innerHTML="<br>";
  if(start== null){
    messageArea.innerHTML = "No elements to display!!";
    return;
  }
  while ( current != null) {
    displayArea.innerHTML +="<span>"+ current.data + "-></span>";
    current = current.next;
  }
  displayArea.innerHTML += "null";
}

/* A function to search for the given
* element in the List.
*/
function search() {
  var current = start;
  var flag = 0;
  var data = inputData.value;
  if( data == "" ) {
    messageArea.innerHTML="Element cannot be empty";
    return;
  }
  displayArea.innerHTML="<br>";
  while( current!=null ) {
    if( current.data==data ) {
      flag++;
      displayArea.innerHTML +="<span style='background-color:red;color:white;'>"+ current.data + "-></span>";
    } else {
      displayArea.innerHTML +="<span>" + current.data + "-></span>";
    }
    current = current.next;
  }
  displayArea.innerHTML += "null";
  if( flag == 0) {
    messageArea.innerHTML = "No Element found!!";
  } else {
    messageArea.innerHTML = "Element found!!";
  }
  inputData.value="";
}

/* A function to remove the given element
* from the list.
*/
function remove () {
  var data = inputData.value;
  var flag = 0;
  var previousNode = null;
  var currentNode = null;
  var nextNode = null;
  var currentNode = start;
  if( (start == null) || (data == "")){
    messageArea.innerHTML = "No element to be removed";
    return;
  } else if ( start.data == data ) {
    start = start.next;
    flag++;
  } else {
    currentNode = start.next;
    while ( currentNode != null ){
      if( currentNode.data == data ){
        flag++;
        previousNode = currentNode.previous;
        if(currentNode.next != null){
        nextNode = currentNode.next;
        previousNode.next = nextNode;
        nextNode.previous = previousNode;
      } else {
        previousNode.next = null;
        end = previousNode;
      }
        break;
      }
      currentNode = currentNode.next;
    }
  }
  display();
  inputData.value="";
  if(flag==0){
    messageArea.innerHTML = "Element not found";
  } else {
    messageArea.innerHTML = "Element removed";
  }
}

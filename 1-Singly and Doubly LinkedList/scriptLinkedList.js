var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var searchBtn = document.getElementById('search');
var displayArea = document.getElementById('result');
var messageArea = document.getElementById('messageArea');
var inputData = document.getElementById('input');

var start = null;                                   //to track the start of the list
var end = null;                                     //to track the end of the list

display();

function Node ( data ) {                            //for creating and initializing new node
  this.data = data;
  this.next = null;
}

/*
* A function to add the given element at the rear
* of the list.
*/
function addElement() {
  var data = inputData.value;                             //getting the input value
  if( data == "" ) {
    messageArea.innerHTML="Give input to add";
    return;
  }
  var node = new Node(data);                              //creating a new node to be insertrd
  if (start == null) {                                    //inserting starting node.
    start = node;
    end = node;
  } else {                                                //inserting other nodes
    end.next = node;
    end = node;
  }
  display();
  inputData.value="";
  messageArea.innerHTML="Element Added!";
}

/* A function to display all the elements
* in the List.
*/
function display() {
  var current = start;
  displayArea.innerHTML="<br>";
  if(start== null){
    messageArea.innerHTML = "No elements to display!!";
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
  var previous = null;
  var current = null;
  var current = start;
  if( (start == null) || (data == "")){
    messageArea.innerHTML = "No element to be removed";
    return;
  } else if ( start.data == data ) {
    start = start.next;
    flag++;
  } else {
    previous = start;
    current = start.next;
    while ( current != null ){
      if( current.data == data ){
        flag++;
        previous.next = current.next;
        break;
      }
      current = current.next;
      previous = previous.next;
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

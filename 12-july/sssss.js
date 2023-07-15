// ?The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections

///////////////////////
// const x = document.querySelectorAll("p.intro");

// const x = document.getElementsByClassName("intro");

///////////////////////////////


to change html document.getElementById(id).innerHTML = new HTML


// {/* <script> */}
// document.getElementById("p1").innerHTML = "New text!";
// </script>

Changing the Value of an Attribute

// h2>JavaScript HTML DOM</h2>
// <img id="image" src="smiley.gif" width="160" height="120">

// <script>
// document.getElementById("image").src = "landscape.jpg";
// </script>
.
..//////////////////////////////


{/* <script>
document.getElementById("demo").innerHTML = "Date : " + Date();
</script> */}





document.write()
// In JavaScript, document.write() can be used to write directly to the HTML output stream:


<p>Bla, bla, bla</p>

<script>
document.write(Date());
</script>

<p>Bla, bla, bla</p>


////////////////////////////////////



remova///// 

const element = document.getElementById("demo");
element.remove();



<script>
function myFunction() {
  const element = document.getElementById("demo");
  element.remove();
}
</script>



add////////////////////////////
reating new HTML Elements - insertBefore()
The appendChild() method in the previous example, appended the new element as the last child of the parent.

// If you don't want that you can use the insertBefore() method:



/////////////////////
Removing Existing HTML Elements
To remove an HTML element, use the remove() method:.


.


///////////////
eplacing HTML Elements 
To replace an element to the HTML DOM, use the replaceChild() method:



///////////////////////////////////

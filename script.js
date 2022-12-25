Assignment Day-1:
Question-1:

Write a blog on Difference between HTTP1 vs HTTP2-

Answer:

HTTP Methods:

.GET - This is used to read or retire an information from the server.
.POST - Send the data to serve.
.PUT - It's a method to update the data based on existing data.
.DELETE - This method is used to delete a resource from the server.

-HTTP stands for hypertext transfer protocol, and it is the basis for almost all web applications. 
-More specifically, HTTP is the method computers and servers use to request and send information.
-The first usable version of HTTP was created in 1997. Because it went through several stages of development, this first version of HTTP was
called HTTP/1.1. This version is still in use on the web. In 2015, a new version of HTTP called HTTP/2 was created.
-HTTP/2 solves several problems that the creators of HTTP/1.1 did not anticipate. In particular, HTTP/2 is much faster and more efficient 
than HTTP/1.1. One of the ways in which HTTP/2 is faster is in how it prioritizes content during the loading process.

-HTTP (Hypertext Transfer Protocol) is a set of rules that runs on top of the TCP/IP suite of protocols and defines how files are to be
transferred between clients and servers on the world wide web.

Key Features of HTTP/1.0:
-The concept of headers both for requests (from the client machine) as well as responses (from servers) was introduced.
The use of headers such as GET, POST, HEAD added extended flexibility, none of which was possible with the earlier version.
-Version information was now included.
-It allowed a single request/response for every TCP connection.
-Status codes were used to indicate successful requests and to indicate transmission errors.
-The content-type header made it possible to send files other than plain HTML, including scripts and media.

HTTP/1.1, the first standardized version of HTTP, was introduced in 1997. It presented significant performance optimizations (over HTTP/0.9 and HTTP/1.0)
and transformed the way requests and responses were exchanged between clients and servers.

Key Features of HTTP/2:
-It introduces the concept of a server push where the server anticipates the resources that will be required by the client and pushes them
prior to the client making requests. The client retains the authority to deny the server push; however, in most cases, this feature adds a
lot of efficiency to the process.
-Introduces the concept of multiplexing that interleaves the requests and responses without head-of-line blocking and does so over a 
single TCP connection.

-HTTP2 Vs. HTTP1 is not a debate at all. HTTP2 is much faster and more reliable than HTTP1. HTTP1 loads a single request for every TCP 
connection, while HTTP2 avoids network delay by using multiplexing.

If  we talk about the actual difference between the HTTP1.1 AND http2:

-For example, when you’re typing something in a Google Doc, as I am typing this article right now, every keystroke sends data to Google’s
servers. Google’s servers process that data, and then send updates back to your browser with the text you’ve typed, along with other 
helpful information like suggestions, the last edit status of the document, and much more. Over HTTP/1.1, each of your keypresses would 
initiate a new connection to the server, to send each character you typed over the wire. Then, your browser would have to constantly “ping”
Google’s server to see if the status of the document changed, to add the character to the screen you’re looking at. That’s a boatload of 
connections, and each one takes precious time.

With HTTP/2 though, it’s essentially a constant two-way stream over a single connection. Google’s server is always listening for data coming from your browser, and your browser is always listening for data to come back from Google. There’s no more send data, wait for response, update the screen, send more data, wait for a response, etc. Instead, everything happens in real-time. In this way, a web “page” like a Google Doc can update itself so frequently as to feel like a native application on your computer.

- HTTP1.1 works on the textual format, where as HTTP2 works on the binary protocol.
- HTTP1.1 uses requests resource Inlining for use getting multiple pages, where as HTTP2 uses PUSH frame by server that collects all multiple 
 pages(HTTP2 is fully multiplexed, instead of ordered and blocking).
- HTTP1.1 compresses data by itself. where as HTTP2 uses HPACK for data compression. 
- In HTTP1.1 there is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources, where as HTTP2
 allows multiplexing so one TCP connection is required for multiple requests.
 
Disadvantages of HTTP/1.1:
-Previously, HTTP/1.1 was the major version of HTTP network protocol used by the World Wide Web, implemented across clients and servers.

-That worked well for 15 years. But as modern day applications and websites evolved and the amount of data to be loaded on a single page
increased, the shortcomings of HTTP/1.1 became more prominent.


Assignment Day-1:
Question-2:

Write a blog about objects and its internal representation in Javascript -

Answer:

-Objects in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript.
-These objects are quite different from JavaScript’s primitive data-types like (Number, String, Boolean, null, undefined and symbol) in 
the sense that while these primitive data-types all store a single value each (depending on their types).
-Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.
-Simply speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, 
in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the 
context of an object.

eg:
For Eg. If your object is a student, it will have properties like name, age, address, id, etc and methods like updateAddress, updateNam, etc

-A JavaScript object has properties associated with it.
-A property of an object can be explained as a variable that is attached to the object.

objectName.propertyName

-Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive. 
-You can define a property by assigning it a value. 

-For example, let’s create an object named myCar and give it properties named make, model, and year as follows:

let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

Unassigned properties of an object are - undefined.

myCar.color; // undefined

-Properties of JavaScript objects can also be accessed or set using a bracket notation.

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

-Every object has some property associated with some value. 
-These values can be accessed using these properties associated with them.

var myCar = new Object();
myCar.make = 'Suzuki';
myCar.model = 'Altros';
myCar.year = 1978;
myCar.wheels = 2;

-After creating myCar object, the value inside the object can be accessed using keys.
i.e.

myCar.year
Output: 1978

-These values can be accessed using brackets notation also.

myCar.year
Output: 1978

-The simplest way to create an object is with the “object literal” notation:

{} // this is an empty object 
var myObj = {a: 1, b: 2} // myObj is assigned an object 
// this object has 2 keys (a and b) and 2 values (1 and 2) 
 
// we can get a value from an object by referencing the key 
 
myObj['a'] // this is called bracket notation and returns 1 
myObj.b    // this is called dot notation and returns 2 here 

-The JavaScript for...in statement loops through the properties of an object.

Syntax:
for (let variable in object) {
  // code to be executed
}

-The block of code inside of the for...in loop will be executed once for each property.
Looping through the properties of an object:

const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}

output-
Looping object property values:
John Doe 25

-The way to create an "object type", is to use an object constructor function.
-In the example below, function Person() is an object constructor function.
-Objects of the same type are created by calling the constructor function with the new keyword:

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
// Display age
console.log("My father is " + myFather.age + ". My mother is " + myMother.age + ".");

output-
My father is 50. My mother is 48.











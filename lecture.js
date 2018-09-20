//JSON
//any language can use it can send over raw data
//XHR or XMLHttpRequest is the old school verison of fetch where you have to make multiple requests to
//make it work and was supported across browsers

//fetch() is the new verison of XMLHttpRequest and the browser also has fetch automatically built into setInterval(function () {

fetch('pass in the url you are looking for'); //no backticks needed
//its easy to call a fetch request but it returns a promise
//you can only interface with your promise using dot notation and calling the functions it has
//it is really hard to get the data out of
let promise = fetch('url');
.then //is how you access the information the promise returns
//*** fetch patten always ****
fetch('url')
  .then(r => r.json())// in order to see this and be able to read it we have to call r.json() on it
  .then(r => console.log(do whatever you need to display here)); // this will actually show you what is in the response of what ever you requested.
//** fetch pattern always above ***

//this will always be the patter in which we write fetch
.then()//will only return a failure on the last then if you have an errorhandler
.catch() //will catch any failure in the .then chain you have made

document.addEventListener('DOMContentLoaded', function(){
  console.log('from ele', document.querySelector('#brewList')) //will return something
  fetch('https')
    .then(resp => resp.json())
    //make sure you know what you are getting back as a response
    .then(resp => {
      resp.brews.forEach(brewObj => {
        let brewList = document.querySelector('#brew-list');
        //create an element
        //add some properties to it
        //add any event listerners to it if we need to
        //append to DOM
        const li = document.createElement('li');
        li.innerText = brewObj.blend_name;//this is coming from our response
        brewList.append(li);
      });
    });
});

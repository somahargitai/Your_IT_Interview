- [What is the difference between SPA and Ajax?](https://www.quora.com/What-is-the-difference-between-SPA-and-AJAX)
  * A SPA (single page application) is based on content that minimizes the traditional concept of using a full response (post) to the server by using asynchronous calls to update pieces and parts of the content instead. 
  * AJAX (asynchronous JavaScript and XML) describes the process of making these partial content requests/responses to the web server. 

- What is a callback?

Any function that is passed as an argument is called a callback function.
```
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});
```

```
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```

[JavaScript: What the heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced) 
by [Brandon Morelli])(https://codeburst.io/@bmorelli25)

- What is a Promise?

A promise is an object that may produce a single value some time in the future. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection. [Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

- What is an arrow function in __ES6__?
An arrow function expression is a syntactically compact alternative to a regular function expression.

You can replace a function:
```
function timesTwo(params) {
  return params * 2
}
timesTwo(4); 
```
to:
```
var timesTwo = params => params * 2
timesTwo(4); 
```
Here is [article](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26) about when (and why) you should use ES6 arrow functions — and when you shouldn’t.

- How to use map() function?
.map() takes 2 arguments, a callback (and an optional context). The callback runs for each value in the array and returns each new value in the resulting array.

```
const officersIds = officers.map(officer => officer.id);

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
```

[Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) by [Etienne Talbot](https://medium.com/@etiennetalbot)

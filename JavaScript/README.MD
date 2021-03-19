# Javascript, Web development

## Language elements and Behaviour

- Show an immutable and a mutable type
- How to iterate through a string?
- How does concurrency model work?
- Event loop
- Can Javascript run on multiple threads? How does it solve concurrency problems?
- How does Inheritance work in Javascript?
- What is Prototype Chain?
- What is the difference between var and let/const? What is there scope?
- What is hoisting?
- What is clojure/parent scope and block scope?
- How var can create memory leaks?

## Architectural concepts and their differences, scalability

- How would your architecture look like for a
  - Pet project blog
  - A commerce site, like a popular webshop
  - A huge project, like Booking.com
- SPA
- file data storages, static assets

## Development toolset, code quality

- Linters
- Style guide to avoid _"religion wars"_ among developers
- How do you organize your data? Endpoints, tests, third party services, utils? Would you use long files?
- build pipelines

## Security

- What are the typical security problems and how to solve them?
- What are CORS headers?
- What is TLS?
- HTTP vs HTTPS
- XSS, Cross-site scripting attack
- DDos attack
- DNS hijacking attack
- SQL injection
- How do you prevent a website from pulling your website to an iframe to steal data
- Should you use websockets? What are they for?
- Can Javascript read cookies?
- How does a login process look like?
- What is session and how to use it?
- Where is a session stored?
- What is a hash?
- How and when to use HTTP response headers _HttpOnly_?
- How and when to use _secure_ switch?
- Who can read cookies?
## Questions about Async behaviour

Ajax, callback, Promise, Async

- [What is the difference between SPA and Ajax?](https://www.quora.com/What-is-the-difference-between-SPA-and-AJAX)
  * A SPA (single page application) is based on content that minimizes the traditional concept of using a full response (post) to the server by using asynchronous calls to update pieces and parts of the content instead. 
  * AJAX (asynchronous JavaScript and XML) describes the process of making these partial content requests/responses to the web server. 

### What is a __Callback__?

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

### What is a __Promise__?

A promise is an object that may produce a single value some time in the future. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection. [Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

### What is an arrow function in __ES6__?
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

## Array processing

### How to use map() function?
.map() takes 2 arguments, a callback (and an optional context). The callback runs for each value in the array and returns each new value in the resulting array.

```
const officersIds = officers.map(officer => officer.id);

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
```

[Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) by [Etienne Talbot](https://medium.com/@etiennetalbot)

[My Gist about Array processing functions in ES6](https://gist.github.com/somahargitai/c4c873bdbca0e2ee618789d01ca0a9d2)
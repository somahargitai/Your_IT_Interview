- What is Node.js? Where can you use it?
- Why use Node.js?
- How do you update NPM to a new version in Node.js?
- Why is Node.js Single-threaded?
- Explain callback in Node.js
- What is callback hell in Node.js?
- Explain the role of REPL in Node.js.

Answers
- Node def: Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser, based on Google’s V8 JavaScript engine (virtual machine). 
- Why? : 
 * non-blocking
 * async
 * concurrency
 * scalability
- update npm: `$ sudo npm install npm -g`
- Why is Node.js Single-threaded? : 
Node.js is single-threaded for async processing. 
By doing async processing on a single-thread under typical web loads, 
more performance and scalability can be achieved as opposed to the typical thread-based implementation. 
- Explain callback in Node.js. :
A callback function is called at the completion of a given task. 
This allows other code to be run in the meantime and prevents any blocking.  
Being an asynchronous platform, Node.js heavily relies on callback. 
All APIs of Node are written to support callbacks. 
- Callback hell in Node.js - overnesting
- Explain the role of REPL in Node.js. : READ EVAL PRINT LOOP  
As the name suggests, REPL (Read Eval print Loop) performs the tasks of – Read, Evaluate, Print and Loop. The REPL in Node.js is used to execute ad-hoc Javascript statements. The REPL shell allows entry to javascript directly into a shell prompt and evaluates the results. For the purpose of testing, debugging, or experimenting, REPL is very critical.  

https://medium.com/@vigowebs/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

https://www.techbeamers.com/top-30-node-js-interview-questions-answers/

https://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm

https://dev.to/aershov24/7-hardest-nodejs-interview-questions--answers-3lje

https://career.guru99.com/top-25-interview-questions-on-node-js/

https://www.simplilearn.com/node-js-interview-questions-and-answers-article

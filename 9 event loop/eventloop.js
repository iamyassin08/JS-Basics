// What is an Event Loop?
// Think of an event loop as a manager at a busy coffee shop. This manager's job is to keep track of orders (events) and make sure they get handled (processed). The manager waits for new orders to come in, then works through them one by one, handling each order in the order they were received.

// How Does It Work?
// Waiting for Events: The event loop starts by waiting for events to happen. In programming, these events could be things like user clicks, data arriving from the internet, or timers finishing.

// Handling Events: When an event happens, the event loop picks it up and hands it off to the appropriate handler (a piece of code that knows what to do with the event). After handling the event, the loop goes back to waiting for the next event.

// Repeating: This process repeats continuously. The event loop is always waiting for new events and processing them as they come in.

// Example in JavaScript
// JavaScript uses an event loop to handle tasks like user interactions and network requests. Here’s a simple example:

console.log('Start');

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

// What happens here?

// console.log('Start'): This gets printed immediately because it's a straightforward command.

// setTimeout: This tells the event loop to wait 2 seconds before running the code inside the setTimeout function.

// console.log('End'): This gets printed immediately after "Start", because the setTimeout function doesn’t pause the code; it schedules it to run later.

// After 2 seconds: The event loop runs the code inside the setTimeout, and you see "This runs after 2 seconds" in the console.

// Visualizing It
// Imagine a queue of tasks:

// Start: Task 1 goes to the front of the queue.
// Set Timeout: Task 2 is set aside to run later (after 2 seconds).
// End: Task 3 goes to the front of the queue after Task 1.
// After the main tasks (Start and End) are handled, the event loop goes back to the tasks that were set aside (like the setTimeout).

// Real-World Analogy
// Imagine a person at a ticket counter:

// They start with an empty line (event queue).
// Customers (events) come in and wait in line.
// The person helps each customer one by one.
// If a customer needs to come back later (like a delayed event), the person notes it down and serves the other customers in the meantime.
// In summary, the event loop is like a diligent ticket counter worker who constantly waits for and processes new tasks or events as they come in, ensuring that each task is handled in a timely manner.

// Call stack
// Web API's
// Task Queue 
// Microtask Queue 
// Then Event Loop

// 1. Call Stack
// The call stack is like a stack of plates. When you call a function, a new "plate" is added to the top of the stack. When the function finishes, that plate is removed. The call stack keeps track of which functions are currently running and their execution contexts.

// How it works:

// When a function is called, it is pushed onto the call stack.
// When the function completes, it is popped off the stack.
// Example:

function greet() {
    console.log('Hello');
}

function main() {
    greet();
    console.log('World');
}

main();

// Execution Flow:

// main is called and added to the call stack.
// greet is called from within main, so it is added to the call stack.
// greet executes and is removed from the stack.
// console.log('World') executes, and main is removed from the stack.
// 2. Web APIs
// Web APIs are provided by the browser and allow web applications to perform asynchronous operations like fetching data, handling user input, or accessing media devices. When you use a Web API, it may handle the operation outside the JavaScript runtime and notify the runtime when it's done.

// Examples of Web APIs:

// fetch: For network requests.
// setTimeout: For scheduling code to run later.
// navigator.mediaDevices.getUserMedia: For accessing the user's camera or microphone.
// How it works:

// When you call a Web API, it starts its work (like waiting for a network response or a timeout).
// It does not block the call stack; it allows other JavaScript code to run while it waits.
// 3. Task Queue (Macrotask Queue)
// The task queue (or macrotask queue) holds tasks that need to be executed, such as I/O operations, timers, or user events. These tasks are executed one by one in the order they are added.

// Examples of tasks:

// setTimeout and setInterval
// I/O events like file reads or network requests
// User interactions like clicks or keystrokes
// How it works:

// When a task is ready (like a setTimeout callback), it is added to the task queue.
// The event loop processes these tasks in order, one by one, after the call stack is empty.
// 4. Microtask Queue
// The microtask queue (or job queue) is for tasks that need to be executed as soon as possible after the currently executing script and before any tasks from the task queue. It handles things like promise callbacks and MutationObserver callbacks.

// Examples of microtasks:

// Promise callbacks (.then, .catch)
// MutationObserver callbacks
// How it works:

// Microtasks are executed after the currently executing script but before the next task from the task queue.
// The event loop processes all microtasks before moving to the next task in the task queue.
// 5. Event Loop
// The event loop is the mechanism that keeps the JavaScript runtime running. It manages the call stack, the task queue, and the microtask queue, ensuring that tasks are executed in the right order.

// How it works:

// Execute Current Script: Run the code that is currently on the call stack.
// Process Microtasks: After the call stack is empty, process all microtasks in the microtask queue.
// Update Rendering: If needed, update the display (e.g., render changes).
// Process Next Task: Move on to the next task in the task queue.
// Repeat: Continue this process indefinitely.
// Putting It All Together
// Here’s how these components interact:

// Function Calls: Functions get pushed onto the call stack.
// Web API Interaction: When you use a Web API, it works outside the call stack and will notify the event loop when it’s done.
// Task and Microtask Queues: Web APIs often place tasks or microtasks into their respective queues. For example, setTimeout adds a task to the task queue, while promise callbacks go into the microtask queue.
// Event Loop Execution: The event loop handles tasks by:
// Executing the current code on the call stack.
// Processing all microtasks in the microtask queue.
// Executing tasks from the task queue.
// Repeating this process.
// Example Code:

console.log('Start'); // 1

setTimeout(() => {
    console.log('Timeout'); // 3
}, 0);

Promise.resolve().then(() => {
    console.log('Promise'); // 2
});

console.log('End'); // 4

// Execution Order:

// console.log('Start'): Executes first, immediately.
// Microtasks: Promise.resolve().then() is added to the microtask queue and executed before any task from the task queue.
// console.log('Promise'): Executes from the microtask queue after the call stack is clear.
// console.log('End'): Executes immediately after the synchronous code.
// setTimeout: Adds its callback to the task queue, which executes last after all microtasks are processed.
// By understanding these components and their interactions, you can better grasp how JavaScript handles asynchronous operations and manages the execution of code.
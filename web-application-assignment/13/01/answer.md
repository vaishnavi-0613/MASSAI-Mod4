# Node.js Internals – Theory

---

## Node.js Architecture

Node.js is a runtime environment that allows JavaScript to run outside the browser. Its architecture is designed to handle multiple requests efficiently using an event-driven and non-blocking approach.

Main components of Node.js architecture include:
- JavaScript Engine (V8)
- Node.js Core APIs
- Native Bindings
- Event Loop
- libuv

This architecture allows Node.js to be fast, scalable, and suitable for building network-based applications.

---

## JavaScript Engine (V8)

- V8 is an open-source JavaScript engine developed by Google.
- It converts JavaScript code into machine code that the computer can execute.
- V8 provides high performance by using Just-In-Time (JIT) compilation.
- In Node.js, V8 is responsible only for executing JavaScript code, not handling I/O operations.

---

## Node.js Core APIs

- Core APIs are built-in modules provided by Node.js.
- Examples include `fs`, `http`, `path`, `os`, and `events`.
- These APIs allow developers to interact with the file system, network, and operating system.
- They provide JavaScript-friendly methods that internally interact with lower-level system resources.

---

## Native Bindings

- Native bindings act as a bridge between JavaScript code and C/C++ code.
- They allow Node.js core APIs written in JavaScript to communicate with system-level libraries.
- Native bindings help Node.js achieve high performance by using low-level system functions.
- They connect JavaScript with libuv and other native components.

---

## Event Loop

- The event loop is the heart of Node.js’s asynchronous behavior.
- It continuously checks for pending tasks and executes callbacks when operations are completed.
- The event loop allows Node.js to handle many requests using a single main thread.
- It ensures non-blocking execution by delegating heavy tasks to other mechanisms.

---

## libuv

### What is libuv?

- libuv is a C library that provides asynchronous I/O support.
- It is used internally by Node.js.
- libuv handles operations related to networking, file system, timers, and threads.

### Why Node.js Needs libuv

- JavaScript alone cannot perform low-level system operations.
- libuv enables Node.js to interact with the operating system in a non-blocking way.
- It makes Node.js cross-platform by providing a consistent API across operating systems.

### Responsibilities of libuv

- Managing the event loop
- Handling asynchronous I/O operations
- Managing the thread pool
- Performing networking and file system operations

---

## Thread Pool

### What is a Thread Pool?

- A thread pool is a collection of background threads used to perform expensive tasks.
- These threads run separately from the main event loop thread.

### Why Node.js Uses a Thread Pool

- Some operations cannot be handled asynchronously by the OS.
- Using a thread pool prevents blocking the main thread.
- It improves performance and responsiveness.

### Operations Handled by the Thread Pool

- File system operations
- Cryptographic operations
- DNS lookups
- Compression tasks

---

## Worker Threads

### What Are Worker Threads?

- Worker threads allow running JavaScript code in parallel.
- Each worker thread has its own event loop and memory.
- They are used for CPU-intensive tasks.

### Why Worker Threads Are Needed

- Node.js is single-threaded by default for JavaScript execution.
- Heavy computations can block the event loop.
- Worker threads help perform parallel processing without blocking the main thread.

### Difference Between Thread Pool and Worker Threads

| Thread Pool | Worker Threads |
|------------|----------------|
| Used internally by Node.js | Used explicitly by developers |
| Handles background system tasks | Handles CPU-heavy JavaScript tasks |
| Managed by libuv | Managed using Worker Threads API |
| Limited number of threads | Can create multiple workers |

---

## Event Loop Queues

### Macro Task Queue

- Contains tasks scheduled by APIs like `setTimeout` and `setInterval`.
- Tasks are executed in separate event loop cycles.

**Examples:**
- setTimeout
- setInterval
- setImmediate
- I/O callbacks

---

### Micro Task Queue

- Contains high-priority tasks that run immediately after the current execution.
- Executed before moving to the next macro task.

**Examples:**
- Promise callbacks (`then`, `catch`)
- `process.nextTick`

---

### Execution Priority Between Queues

1. Current JavaScript execution
2. Micro Task Queue
3. Macro Task Queue

Micro tasks always execute before macro tasks in each event loop cycle.

---

## Summary

Node.js internals combine JavaScript execution, native system access, and asynchronous processing. Components like V8, libuv, the event loop, thread pool, and worker threads work together to make Node.js efficient, scalable, and suitable for high-performance applications.

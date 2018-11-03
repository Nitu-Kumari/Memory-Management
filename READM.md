Key Terms
~~~
Stack
Stack frame
Heap
Pointer
Queue
~~~

* STACK= A stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO).
~~~

two operation allowed
push=push the item into the stack
pop=pop the item out the stack.
~~~

* Queue=A queue is a container of objects that are inserted and removed according to the first-in first-out (FIFO). 
two operation allowed
1 Enqeue=    Enqueue means to insert an item into the back of the queue.
2 Dequeue= dequeue means removing the front item. 
~~~
#
Javascript Concurrency 1
~~~
Question
Is JavaScript:
option
Single Threaded (ANS) Beacause only one line of code can be  executed at any given time .

Multi-Threaded

Question
~~~
Describe the process the event loop uses when adding an event to the queue?
ans 
beacuse javascript is single threaded model.
they based v8 engine.
only one line of code excuted in one time.
FIFO queue of callbacks to execute.
example 
function f(){
    console.log('nit');
    setTimeout(g,0);//callback g and timeout 0 milisecond
    console.log('nis');
    h();
}
function g(){//loop
    console.log('nis');
}
function h(){
    console.log('tick');

}
f();
~~~

# 
~~~
Stack frame=stack frame is memory location  of the stack.

Pointer=Pointer is reference of heap memory.
Queque= last in fast and fast in last.
Memory Management= Heap section  we store the memory.
~~

#
~~~
The Chrome V8 engine :
The V8 engine is written in C++ and used in Chrome and Nodejs.
It implements ECMAScript as specified in ECMA-262.
The V8 engine can run standalone we can embed it with our own C++ program.

JavaScript is very easy to understand and is a essential part of front-end development.
 it’s single threaded. That means, code execution will be done one at a time.
 code execution is done sequentially,

 * Thread is responsible to handle everything
 scrolling the web page,
  printing something on the web page,
   listen to DOM events (like when user clicks a button) and doing other things.
  ~~~
  # Garbage Collection 1
  ~~~
Question
How does JavaScript manage memory?

Reference Counting Garbage Collection(ANS)

Manual Memory Allocation and Deallocation
Mark and Sweep Garbage Collection 
~~~

 # Garbage Collection 2
 ~~~

Describe how mark-and-sweep Garbage Collection works.

ans they work garbage  collections.
perform two operation
mark(mean a node )
it work 
 depth first search approach  would work for us. Here we can consider every object as a node and then all the nodes (objects) that are reachable from this node (object) are visited and it goes on till we have visited all the reachable nodes.

sweep= the unreachable objects i.e. it clears the heap memory for all the unreachable object
 disadvantage
   the Mark and Sweep Algorithm is run several times on a program, reachable objects end up being separated by many, small unused memory regions. 

   ~~~
   # Memory life cycle Section
   ~~~
  Follwing
Allocate the memory you need
Use the allocated memory (read, write)
Release the allocated memory when it is not needed anymore
~~~
# Garbage collection
garbage collection is a part of memory managment.
garbage collection(Unused Item)

ASKED Question
mark-and-sweep Garbage Collection works?
 JavaScript leaks









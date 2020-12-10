/*A buffer is an area of memory.
 JavaScript developers are not familiar with this concept, 
 much less than C,  C++ or Go developers
(or any programmer that uses a system programming language), 
]which interact with memory every day.
It represents a fixed-size chunk of memory (can't be resized) 
allocated outside of the V8 JavaScript engine.
You can think of a buffer like an array of integers,
 which each represent a byte of data.
It is implemented by the Node.js Buffer class.

A buffer is created using the Buffer.from(), Buffer.alloc(),
 and Buffer.allocUnsafe() methods.*/

var buf = Buffer.from("Hey!")
console.log(buf.toString())
console.log(buf)
console.log(buf[0])//72
console.log(buf.length)//4

for(var item of buf){
  console.log(item)
}

var buf = Buffer.alloc(20)
buf.write("Hello Folks")
console.log(buf.toString())//hello folks

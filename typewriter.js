// const sentence = "hello there from lighthouse labs";
// //let arr=[];
// for (const char of sentence) {
//   let senLength = sentence.length
//   for(let i=0; i< senLength; i+50){
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, i);
//   //arr.push(sentence.charAt(i));
// }
// }


const sentence = "hello there from lighthouse labs";
let y=0; 
for (let char of sentence) {
  setTimeout(() => {
 process.stdout.write(char);
  }, y); 
y+=50
}



alert("hellow");
// if i want to say i want to see this alert after 4 sec.and after the script get executed.

const sum = (a,b) => {
    console.log("yes am running"+(a+b));
    a+b
}
setTimeout(sum,1000,1,2)


let a = setTimeout(function() {
    alert("and am inside of settimeout")
},1000)
// so in javascript if you want to delay some task you can use setTimeOut.
let b = prompt("do you wanaa run setTimeout?")
if("n"===b)
{
    clearTimeout(a);
}
// IF I DONT WANT this alerts after 1 sec then
clearTimeout(a);
console.log(a);
// after console when we go to console and check we find a 1..and that 1 is timerID.
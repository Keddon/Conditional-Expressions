/**
 * Created by keddoncampbell on 2/17/15.
 */

var kidHeight = 30;
var minHeight = 48;
var sneakerLift = 3;
var wParentHeight = 45;
//if the child is over 48 inches in height.
//var oldEnough = true;
//if the child is old enough, print to the console "you are old enough."

if(kidHeight + sneakerLift > minHeight){  // there is a difference between =, == and ===
    console.log("you are old enough to ride!"); //code performed if condition is true
}else if (kidHeight > wParentHeight){
    console.log("you can but with a parent");
}else{
    console.log("Sorry you have some growing to do");
}

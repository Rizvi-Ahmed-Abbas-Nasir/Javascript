var Output = []; //Empty Array
var Count = 1;
prompt("Enter Value");

function FizzBuzz()
{
    while(Count <= 10){

    if (Count % 3 === 0 && Count % 5 === 0) {
        Output.push("FizzBuzz"); 
   }
    else if (Count % 3 === 0  ) {

        Output.push("Fizz");
        
    }
    else if (Count % 5 === 0){
        Output.push("Buzz");
    }
    else{
        Output.push(Count);
    }
  
    Count++;
    }
    console.log(Output);
}
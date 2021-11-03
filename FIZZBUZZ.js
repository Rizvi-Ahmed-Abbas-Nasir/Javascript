var Output = []; //Empty Array
var Count = 1;


function FizzBuzz()
{

    if (Count % 3 === 0) {

        Output.push("Fizz");
        
    }
    else if (Count % 5 === 0){
        Output.push("Buzz");
    }
    else{
        Output.push(Count);
    }
  
    Count++;
    console.log(Output);
}
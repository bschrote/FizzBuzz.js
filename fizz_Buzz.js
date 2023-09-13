let F = 3
let B = 5

for (let N = 1; N<=100; N++)
{
    if ((N % F == 0) && (N % B == 0)) 
       console.log("FizzBuzz")
    else if (N % F == 0)
    {
        console.log ("Fizz")
    }
    else if (N % B == 0) {
        console.log ("Buzz")
    } 
    else {
        console.log(N)
        }

}

        



let F = 3
let B = 5

for (let I = 1; I<=100; I++){
    let N = I.toString();
    
    if((N % F == 0) && (N % B == 0)) {
        if ((N.includes(F)== true) && (N.includes(B) == true)) {
            console.log ("FizzFizzBuzzBuzz")
        }
        if (N.includes(F) == true) {
            console.log("FizzFizzBuzz")
        } 
        if (N.includes(B) == true) {
            console.log("FizzBuzzBuzz")    
        }      
    }
    else if (((N % F == 0) && (N % B == 0) ) || ((N.includes(F) == true) && (N.includes(B) == true))) { 
       console.log("FizzBuzz")
    }
    
    else if ((N % F == 0) && ((N.includes(F) == true) || (N.includes(B) == true))) {
        if (N.includes(F) == true) {
            console.log("FizzFizz")
        }
        if (N.includes(B) == true) {
            console.log("FizzBuzz")
        }
    }     
    else if ((N.includes(F) == true) || (N % F == 0))
 {
        console.log ("Fizz")
    }
    else if ((N % B == 0) && ((N.includes(F) == true) || (N.includes(B) == true))) {
        if (N.includes(B) == true) {
        console.log ("BuzzBuzz")
        }
        if (N.includes(F) == true) {
            console.log("FizzBuzz")
        }
        } 
    else if ((N.includes(B) == true) || (N % B == 0)) {
        console.log ("Buzz")
    } 
   
    else {
        console.log(N)
        }

}

        



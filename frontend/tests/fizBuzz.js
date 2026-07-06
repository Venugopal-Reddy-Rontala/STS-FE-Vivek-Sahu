

function fizBuzz(num) {
    
    for (let i = 0; i <= num; i++) {
        console.log(i)

         if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz")
        }else if(i%3 === 0){
            console.log("fizz")
        }else if(i%5 === 0 ){
            console.log("BUZZZ")
        }
        
    }
}


fizBuzz(100)
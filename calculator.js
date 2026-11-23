
  
  
let addDigits =(digits)=>{
    let input = document.querySelector("input")

   if(input.value ==0)
    input.value=digits
 else
  input.value +=digits
  console.log(digits);

   
  
    
    
}

let cal =()=>{
    let input = document.querySelector("input")

    let experssion = input.value
   // console.log(experssion);

   let ans = eval(experssion)

   input.value=ans
    
    
    

  

}

let remove =()=>{

    let input = document.querySelector("input")

    let exp = input.value;

    let updateexp = exp.slice(0,-1)

    input.value = updateexp;


    


    
}

let clean = ()=>{

    let input = document.querySelector("input")

    input.value = " "

    
}

 
 


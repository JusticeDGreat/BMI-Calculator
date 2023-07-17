// let containerDiv = document.querySelector(".container");
// let namess = document.querySelector(".name");
// let newDiv = document.createElement("div");
// // textNode is in node format not string so you cant make use of the innerHTML
// let textNode = document.createTextNode("This is a dynamically text node");
// // to add the textNode to the div make use of the appendChild

// newDiv.appendChild(textNode);

// containerDiv.insertBefore(newDiv,namess);






// const input1 = document.querySelector("#weight").value;
// const input2 = document.querySelector("#height").value;
const buttonSubmit = document.querySelector("#submit")
const bottonReset = document.querySelector("#reset")

buttonSubmit.addEventListener("click", (event) =>{
    event.preventDefault()
    const input1 = document.querySelector("#weight").value;
    const input2 = document.querySelector("#height").value;
    const p = document.querySelector("#statement");
    
    input1.style = `
                     color:red;
                    outline:none;
                     border:none`
    
    if(input1 =="" || input2 =="" || isNaN(input1) == true || isNaN(input2)==true){
   p.textContent = ` Please enter a number`
    }else{
        
        const bodyMass =(Number(input1)/((Number(input2))**2)).toFixed(2)

        if(bodyMass < 18.5){
            p.classList.add("biscuit")
                    p.textContent =`Your Body Mass Index (BMI) is ${bodyMass}kg/m^2 and 
                     you are UNDERWEIGHT `
        }else if(bodyMass >= 18.5 && bodyMass < 25){
            p.classList.add("biscuit")
            p.textContent =`Your Body Mass Index (BMI) is ${bodyMass}kg/m^2 and 
            you are NORMAL `
        }else if(bodyMass >= 25 && bodyMass < 30 ){
            p.classList.add("grace")
            p.textContent =`Your Body Mass Index is ${bodyMass}kg/m^2 and 
            you are OVERWEIGHT. 
            Please have more exercise and visit a Dietitian ` 
        }else{
            p.classList.add("grace")
            p.textContent =`Your Body Mass Index (BMI) is ${bodyMass}kg/m^2 and 
            you are OBESE.
            Please have more exercise and visit a Dietitian ` 
        }


    }   

})



function locationReload(){
    document.location.reload()
}



const arrayImage = ["./image/p2.jpg","./image/book1.jpg","./image/book2.jpg","./image/Ex2.png","./image/Exercise1.jpg"]

setInterval(() => {
    
const arrayImage = ["./image/book1.jpg","./image/book2.jpg","./image/Exercise1.jpg"];
const randomImage = Math.floor(Math.random()*arrayImage.length);
document.querySelector("img").src = arrayImage[randomImage];
    
}, 2000);
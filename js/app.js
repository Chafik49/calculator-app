let switchContainer= document.querySelector(".switcher"),
    switchBall = document.querySelector(".ball"),
    numbersTheme = document.querySelectorAll(".themeNumber"),
    appConatiner = document.querySelector(".app-container"),
    output = document.querySelector(".output"),
    gridContainer = document.querySelector(".calculator-grid"),
    delBtn = document.querySelector("span.del"),
    resetBtn = document.querySelector("span.reset-btn"),
    otherBtn = document.querySelectorAll(".calculator-grid span.numb");
    equalBtn = document.querySelector("span.equal-btn");

/* Themes work  */

numbersTheme.forEach((span)=>{

    span.onclick = function(){
        if(span.textContent==="2"){
            switchBall.style.left = "29px";
            themeTwo();

        }else if(span.textContent === "3"){
            switchBall.style.left = "57px";
            themeThree();
        }else{
            switchBall.style.left = "5px";
            themeOne();
        }
    }
})


var i=1 ;
switchContainer.onclick = ()=> {
    numbersTheme[i].click ();
    i++;
    if(i >=3 ){
    
        i=0;      
    }
}
function themeOne(){
    appConatiner.addEventListener("click" , ()=>{
        document.documentElement.style.setProperty("--back-color" , "hsl(222, 26%, 31%)");
        
    });
    otherBtn.forEach((bt)=>{
        bt.classList.remove("theme3");
    })
    switchContainer.classList.remove("theme2" ,"theme3");
    output.classList.remove("theme2" , "theme3");
    gridContainer.classList.remove("theme2" , "theme3");
    delBtn.classList.remove("theme2" , "theme3");
    resetBtn.classList.remove("theme2" , "theme3");
    equalBtn.classList.remove("theme2" , "theme3");
    var theTextOne = document.querySelectorAll(".text");
    theTextOne.forEach((t)=>{
        t.classList.remove("black" ,"yellow")
        t.classList.add("white");
    })
    

}
function themeTwo(){
    appConatiner.addEventListener("click" , ()=>{
        document.documentElement.style.setProperty("--back-color" , "hsl(0, 0%, 90%)");
        
    });
    otherBtn.forEach((b)=>{
        b.classList.remove("theme3");
    })
    switchContainer.classList.add("theme2");
    output.classList.add("theme2");
    delBtn.classList.add("theme2");
    resetBtn.classList.add("theme2");
    gridContainer.classList.add("theme2");
    equalBtn.classList.add("theme2");
    var theText = document.querySelectorAll(".text");
    theText.forEach((t)=>{
        t.classList.remove("white" ,"yellow")
        t.classList.add("black");
    });

    
}

function themeThree(){
    appConatiner.addEventListener("click" , ()=>{
        document.documentElement.style.setProperty("--back-color" , "hsl(268, 75%, 9%)");
        
    });
    otherBtn.forEach((btn)=>{
        btn.classList.add("theme3");
    })
    switchContainer.classList.add("theme3");
    output.classList.add("theme3");
    gridContainer.classList.add("theme3");
    delBtn.classList.add("theme3");
    resetBtn.classList.add("theme3");
    equalBtn.classList.add("theme3");

    var myText = document.querySelectorAll(".text");
    myText.forEach((t)=>{
        t.classList.remove("black" ,"white")
        t.classList.add("yellow");
    })
    

}

/* Calculator work */

var currentOperand = "Null",
    firstNumber = 0,
    secondNumber = 0;

let numbers = document.querySelectorAll(".number"),
    operand = document.querySelectorAll(".operand"),
    firstPlace = document.querySelector(".firstPlace"),
    secondPlace = document.querySelector(".secondPlace"),
    dotBtn = document.querySelector(".dot");
    
numbers.forEach((numb)=>{
    numb.addEventListener("click" , ()=>{
        if(secondPlace.textContent =="0"){
            secondPlace.textContent =  numb.textContent;
        }else{
            secondPlace.textContent += numb.textContent; 
        }          
    });
})

var haveDot = false;



operand.forEach((op)=>{
    
    op.addEventListener("click" , ()=>{
        haveDot = false;
        var j=0;
        if(j == 0){
            if(op.textContent === "+"){
                currentOperand = "plus";
            }else if(op.textContent === "-"){
                currentOperand = "minus";
                
            }else if(op.textContent === "X"){
                currentOperand = "multiplication";
            }else{
                currentOperand = "division";      
            }
            firstPlace.textContent = parseFloat(firstPlace.textContent) + parseFloat(secondPlace.textContent) +op.textContent;
            firstNumber = parseFloat(firstPlace.textContent);
            j++;

        }else{
            firstPlace.textContent = parseFloat(firstPlace.textContent) + parseFloat(secondPlace.textContent) +op.textContent;
            firstNumber = parseFloat(firstPlace.textContent);
            equalBtn.click();
        }        
        secondPlace.textContent="0";           
    });
    
});

dotBtn.addEventListener("click", ()=>{
    if(haveDot == false){
        secondPlace.textContent+=dotBtn.textContent;
        haveDot = true;
    }
})

resetBtn.addEventListener("click", ()=>{
    secondPlace.textContent ="0";
    firstPlace.textContent ="0";
});

delBtn.addEventListener("click" , ()=>{
    secondPlace.textContent = secondPlace.textContent.slice(0 , -1);
});

var result = 0;

function calculate(firstN , secondN , operand){
    
    if(operand === "plus"){
        result = eval (firstN + secondN);

    }else if(operand === "minus"){
        result = eval(firstN - secondN);

    }else if(operand === "multiplication"){
        result  = eval(firstN * secondN);

    }else{
        result  = eval(firstN / secondN);
    }
   
    secondPlace.textContent  = result.toFixed(2);
    
    
}


equalBtn.onclick = function(){

    calculate(firstNumber , parseFloat(secondPlace.textContent), currentOperand);
    firstPlace.textContent ="0";

}





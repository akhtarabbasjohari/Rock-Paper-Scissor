let userScore=0
let compScore=0

const images=document.querySelectorAll(".images")
const result=document.querySelector("#message")
const userResult=document.querySelector("#your-score")
const compResult=document.querySelector("#comp-score")

const getCompChoice=()=>{
    const options=["rock","paper","scissor"]
    let rndNum=Math.floor(Math.random() * (3 - 0 + 0)) +0
    console.log(rndNum)
    return options[rndNum]
    
}
const matchDraw=()=>{
    result.textContent="Game Draw Play Again"
    result.style.backgroundColor="gray"
}
const userWon =()=>{
    userScore+=1
    result.textContent="Congratulation You Won"
    userResult.textContent=userScore
    result.style.backgroundColor="green"

}
const userLost = ()=>{
    compScore+=1
    result.textContent="You Lost Try Again"
    compResult.textContent=compScore
    result.style.backgroundColor="red"
}

const gamePlay=(userChoice)=>{
    const compChoice=getCompChoice()
    let userWinCase=true
    let draw=userChoice==compChoice
    if(draw){
        matchDraw()
    }
    else{
        if(userChoice==="paper"){
            userWinCase = compChoice === "scissor"? false :true
        }
        else if(userChoice === "rock"){
            userWinCase = compChoice === "scissor" ? true : false
        } else{
            userWinCase = compChoice === "paper"? true :false
        }
        if(userWinCase )
            userWon()
        else
            userLost()
}
}

images.forEach((image) => {
    image.addEventListener('click',()=>{
        image.classList.add("clicked")
        const selectedId=image.getAttribute("id")
        gamePlay(selectedId)
        image.classList.remove("clicked")
    })

});
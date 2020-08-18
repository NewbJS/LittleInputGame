function ranNum(length) {
    var result           = ''
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
 }

let questions = ['s', ranNum(2), ranNum(3), ranNum(4), ranNum(5), ranNum(6), ranNum(6)]
let questionIndex = 0
let questionsRight = []
let questionsWrong = []
function startGame(){
    questions[questionIndex]
}


function inputText(){
    const inputValue = document.getElementById('inp').value
    const headerValue = document.getElementById('header')
    let divText = document.getElementById('divtext')
    if(inputValue === questions[questionIndex]){
        questionsRight.push(questions[questionIndex])
        headerValue.innerText = 'Correct!'
        questionIndex++

    }else{
        questionsWrong.push(inputValue)
        headerValue.innerText = 'Incorrect!'
        questionIndex++
    }
        
    
    divText.innerText = 'Type in ' +questions[questionIndex]
    
    if(questionIndex === questions.length){
        divText.innerText = 'Game over! You got  '+ questionsRight.join(', ') + 
        ' correct! You typed '+questionsWrong.join(', ') +' which were wrong! Type \'s\' to play again!'
        questionsRight = []
        questionIndex = 0
    }
}
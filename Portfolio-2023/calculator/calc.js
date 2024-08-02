let input = document.querySelector('input')
function getValue(e){
    input.value += e.target.innerText
}

let calci = function(){
    input.value = eval(input.value)
}

let clr = _ => {input.value = ""}
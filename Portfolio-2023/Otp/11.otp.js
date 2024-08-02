function generateotp1(){
    let b=document.querySelector('h2')
    let res = Math.floor(Math.random()*10000)
    let otp=res>=1000 && res<10000;
    otp ? b.innerText= res : generateotp1()
}

function generateotp2(){
    let b=document.querySelector('h3')
    let res=Math.floor(Math.random()*1000000)
    let otp=res>=100000 && res<1000000;
    otp ? b.innerText= res : generateotp2()
}

let otpEight = ()=>{
    let c = document.getElementsByTagName('h3')[1]
    let res = Math.floor(Math.random()*100000000)
    let otp = res>10000000 && res<=100000000;
    otp ? c.innerText = res : otpEight()
}
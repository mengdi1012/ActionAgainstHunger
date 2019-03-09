const setPw= document.querySelector('#set');
const pw=document.querySelector('#password');
const rePW = document.querySelector('#password2');
setPw.addEventListener('click', checkPw)

function checkPw(){
    console.log("=pw.value==")
    if(pw.value!==rePW.value){
        console.log("incorrect re-enter password")
    }
    else{
        location.href = "./student-profile.html";
    }
}
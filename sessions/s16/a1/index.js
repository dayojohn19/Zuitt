function submit() {
    f = document.querySelector("#first").value;
    l = document.querySelector("#last").value;
    e = document.querySelector("#email").value;
    p1 = document.querySelector("#password").value;
    p2 = document.querySelector("#password2").value;

 
    if (p1 != p2){
        alert("Password Must Match");
    }else {
        console.log(f);
        console.log(l);
        console.log(e);
        console.log(p1);
        console.log(p2);
        alert("thanks for Signing up");
    }
}
function confirm() {
    p1 = document.querySelector("#password").value;
    p2 = document.querySelector("#password2").value;
    if (p1 != p2) {alert('password must match');}
}
console.log('aaadd');
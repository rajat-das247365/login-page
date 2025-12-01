
let sub = document.querySelector("#sub");

sub.addEventListener("click",()=>{
let input = document.querySelectorAll("input")    
let admin = document.querySelector("#admin");
let pass = document.querySelector("#pass");


if (admin.value==="ghost" && pass.value==="1234") {
    alert("Logged in successfuly!")
}
else if (admin.value==="" && pass.value==="") {
    alert("Please enter login details!")
}
else{
    alert("Access denied")
}


input.forEach((inp) => {
    inp.value ="";
});
})

let nameinp = document.querySelector("#nameinput");
let cardinp = document.querySelector("#cardinput");
let monthinp = document.querySelector("#month");
let yearinp = document.querySelector("#year");
let cvcinp = document.querySelector("#cvc");

let cardnum = document.querySelector(".cardnum");
let nameshower = document.querySelector(".name");
let expirationdateshower = document.querySelector(".exp");
let cvcshower = document.querySelector(".cvc");





nameinp.oninput = () => {
    nameshower.innerHTML = nameinp.value;
}
cardinp.oninput = () => {
    cardnum.innerHTML = cardinp.value;
}

yearinp.oninput = ()=>{
    let formateddate = `${yearinp.value}/${monthinp.value}`;
    expirationdateshower.innerHTML = formateddate;
}

monthinp.oninput = () => {
    let formateddate = `${yearinp.value}/${monthinp.value}`;
    expirationdateshower.innerHTML = formateddate;
}

cvcinp.oninput = ()=>{
    cvcshower.innerHTML = cvcinp.value;
}
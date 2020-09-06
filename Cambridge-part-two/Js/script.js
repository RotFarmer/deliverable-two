let yield = 50;
let prem = null
let rain = prompt("how many inches of rain fell?");
if(rain<=10){
    yield= 40
}else if(rain>=20){
    yield = 45
}else{
    yield = 50
}

for(ask=rain;ask>0;ask--){
    console.log("*")
}


let fert = prompt("did you use fertilizer?");
if(fert === "yes"){
    prem= prompt("did you use premium fertilizer?")
}else{
    console.log(yield);
    prem === "no";
}

if(prem === "yes"){
    console.log(yield+yield*.15);
}else if(prem === "no"){
    console.log(yield+yield*.10);
}else if(prem = null){
    console.log(yield)
}

for(ask=rain;ask>0;ask--){
    console.log("*")
}

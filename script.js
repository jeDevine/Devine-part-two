let name=prompt("What is your pet's name?")
let happiness=0
let energy=0
for(let i=0; i<6; i++) {
    let action=prompt("What would you like to do now? (feed, walk, pet)")
    if(action==="feed"){
        energy+=2
    } if(action==="walk") {
        if(energy>0){
        happiness+=2
        energy-=1
        } else{
            alert("Not enough energy to enjoy a walk!")
        }
    } if(action==="pet") {
        happiness+=1
    }
}
console.log(name+" "+"has"+" "+happiness+" "+"happiness and"+" "+energy+" "+"energy left!")
alert(name+" "+"has"+" "+happiness+" "+"happiness and"+" "+energy+" "+"energy left!")
let name = 'Kamarini';
const birthDate = new Date(1995, 4, 9);
console.log(name);
console.log(birthDate);

//------------------------- name function---------------------
function getToKnow(firstName, lastName){
   // return firstName + " " +  lastName;
   console.log ("Your name is " + firstName + " " + lastName)
}


getToKnow("kama" , "mor")


//------------------------- rectangle function---------------------

function rectangleArea (length , width){
    return  length * width;
    
}

console.log(rectangleArea(20,10));


//------------------------- speed function---------------------
 
function getDinstance(speed, time){
   let distance = speed * time;
   return distance;
}

console.log("You have travelled " + getDinstance(60, 60) + "km")

//------------------------- object---------------------

let calculator = {
    yourName : 'Kamarini',
    getToKnow: function(firstName, lastName){
      console.log ("Your name is " + firstName + " " + lastName)},

    getDinstance: (speed, time)=> {
        return speed * time
    }


}

const person1 = calculator.getToKnow('kam' , 'mk')
const distance2 = calculator.getDinstance(30 , 20);
console.log(`your distance is  ${distance2} `)



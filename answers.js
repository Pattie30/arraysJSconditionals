////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 0; i <= 20; i++) {
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for(let q = 0; q <= 20; q++){               
   if((q % 2 )=== 0){
    console.log(q)

   } else {
    console.log('')
    
   }   
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let m = 0; m <= 50; m++){    
    if (m % 3 === 0 && m % 5 ===0) {
        console.log('FIZZBUZZ')
        
    }else if(m % 3 === 0){
    console.log('FIZZ')
    
    }else if(m % 5 === 0)  {
        console.log('BUZZ')

        }  else {
        console.log(m)
    }
               
            
        } 
    //////////////////// 
    


////////////////////////////////
// Wild Wild Life  modifying the elements by accessing them.
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
wolfy[3] = "Gotham City"
dart.push('Hawkins')

wolfy.splice(0,1, 'Gameboy')
console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let ninjaArr = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
  for(const ninjaArr2 of ninjaArr) {
    
    console.log(ninjaArr2.toUpperCase());
  }



  
  
//////////////
//////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
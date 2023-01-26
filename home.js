//HomeTask Part1

const abai = '********';
console.log(abai[0]);
console.log(abai[0],abai[1]);
console.log(abai[0],abai[1],abai[3]);
console.log(abai[0],abai[1],abai[3],abai[4]);
console.log(abai[0],abai[1],abai[3],abai[4],abai[5]);
console.log(abai[0],abai[1],abai[3],abai[4],abai[5],abai[6]);
console.log(abai[0],abai[1],abai[3],abai[4],abai[5],abai[6],abai[7]);


//HomeTask Part2

for (var i = 1; i < 101; i++) {
if (i % 15 == 0) console.log("FizzBuzz");
else if (i % 3 == 0) console.log("Fizz");
else if (i % 5 == 0) console.log("Buzz");
else console.log(i);
}

// HomeTask Part3


function createChess (a, b) {
    let firstSym = '# '
    let secondSym = ' #'
    var odd = "";
    var even = "";
    for(let i = 0; i < (a / 2); i += 1){
        odd += firstSym
        even += secondSym 
    }
    for(let j = 0; j < b; j += 1){
        if(j % 2 != 0) {
            console.log(odd);
        }else{
            console.log(even);
        }
    }
}
createChess(16,8)




//HomeTask Part 4 (extra)

let massiv1 =  ['Алекс', 'Анна', 'Олег'];
massiv1.push(1,2,3);
console.log(massiv1);






//HomeTask Part 5(extra)

let mass2 = ['Алина', 'Саша', 'Алекс'];
console.log(mass2[0]);




//HomeTask Part 6(extra)

let arr1 = [1, true, false, undefined];
arr1.unshift('Sasha', 'Alina');
console.log(arr1[0], arr1[1],arr1[4],arr1[5])





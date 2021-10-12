const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

function check2(array2, num2){
    for(let i=0;i<array2.length ; i++){
        for(let j=i+1;j<array2.length ; j++){
            if ((array2[i]+array2[j])===num2){
                console.log("The some of "+array2[i]+" and "+array2[j] +" is equal "+ num2);
            }
        }
    }
}

function Max(array3){
    let x = array3[0]
    for(let i=0;i<array3.length ; i++){
        if (array3[i]> x){
            x = array3[i]
        }
        
    }
    console.log(x);
}

function stars(str){
    for(let i=0;i<str ; i++){
        console.log("\n");
        for(let j=-1;j<i ; j++)
        console.log("*");
    }
}
let array=[];
let min = - Infinity;
    for(i=0; i<3; i ++){
        array[i] = prompt("Inserer un entier = ")
        console.log("le nombre inserer est (id = "+i+") " + array[i] );
        if (array[i]>min){
            min=array[i];
        }
    }
console.log("le nombre max est:" + min );
let tab = [];
let pair = [];
let impair= [];
let c=0;
let d=0;
for (let i =0 ; i<10 ; i++){
    tab[i]=prompt("Saisir un entier (id =" + i+")")
    if (tab [i]%2 ==0){
        a=Number(tab[i]);
        let m=pair.length;
        pair[m]=a;
    }
    else {
        b=Number(tab[i]);
        let r=impair.length;
        impair[r]= b;
        }
    }
console.log("pair " + pair)
console.log("impair " + impair)
for(let m=0; m<pair.length;m++){
    c+=pair[m]
}
for(let r =0 ; r<impair.length ; r++){
    d+=impair[r]
}
let resultat = c-d;
console.log ("la difference (somme pair - somme impair) est égal à " + resultat);
if ( resultat = 0){
    console.log("somme égaux");
}
else if (resultat <0){
    console.log("somme impair supérieur")
}
else{
    console.log("somme pair supérieur")
}
let tab =[];
for(let i=0 ; i<3; i++){
    tab[i]=prompt("inserer un entier : ")
    console.log("le nombre inserer est (id = "+i+") " + tab[i] );
}
if (tab[0]<tab[1] && tab[1]<tab[2] )  {
    console.log("ordre croissant");
}
else if (tab[0]>tab[1] && tab[1]>tab[2] ){
    console.log("en ordre mais non croissant");
}
else {
    console.log("en desordre");
}
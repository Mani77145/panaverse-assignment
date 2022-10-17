var alien_color=['green', 'yellow', 'red']
for(let i=0;i<3;i++){
    if (alien_color[i]=='blue'){
        console.log("the player just earned 5 points")
        break;
    }
    else if(alien_color[i]=='yellow'){
        console.log("the player just earned 10 points")
        break;
    }
}
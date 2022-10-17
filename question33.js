var ordinal = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<ordinal.length;i++){
    if(ordinal[i]==1){
        console.log("%sst",ordinal[i])
    }
    else if(ordinal[i]==2){
        console.log("%snd",ordinal[i])
    }
    else if(ordinal[i]==3){
        console.log("%srd",ordinal[i])
    }
    else{
        console.log("%sth",ordinal[i])
    }
}
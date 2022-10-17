function show_magicians(magicians){
    for(i=0;i<magicians.length;i++){
        console.log(magicians[i])
    }
}
function make_great(magicians){
    great_magicians = []
    for(i=0;i<3;i++){
        magician = magicians.pop()
        great_magician = magician + " the great"
        great_magicians.push(great_magician)
    }
    for(i=0;i<3;i++){
        magicians[i]=great_magicians[i]
    }
}

var magicians = ['Mani', 'Maab', 'Azu']
show_magicians(magicians)
console.log("\n")
make_great(magicians)
show_magicians(magicians)
function show_magicians(par){
    for(i=0;i<3;i++){
        console.log(par[i])
    }
}
function make_great(magic){
    var great_magicians = []
    for(i=0;i<3;i++){
        magics = magic.pop()
        great_magician = magics + " the great"
        great_magicians.push(great_magician)
    }
    for(i=0;i<3;i++){
        magic[i]=great_magicians[i]
    }
}

const magicians = ['Mani', 'Maab', 'Azu']
const magic = ['Mani','Maab','Azu']
show_magicians(magicians)
console.log("\nGreat magician")
make_great(magic)
show_magicians(magic)
console.log("\nOriginal magicians:")
show_magicians(magicians) 
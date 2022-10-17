function make_album(artist,title,tracks=0){
    album_dict = {
        'artist': artist,
        'title': title,
        }
    if(tracks){
        album_dict['tracks'] = tracks
    }
    return album_dict
}
album = make_album('metallica', 'ride the lightning',tracks = 9)
console.log(album)
album = make_album('willie nelson', 'red-headed stranger')
console.log(album)

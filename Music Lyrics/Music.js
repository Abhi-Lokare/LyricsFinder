class Lyrics {
    constructor(){
       this.author = '' 
       this.songName = ''
    }
    getAuthor(author){
         this.author = author
    }
    getSong(song){
         this.songName = song
    }
    async getLyrics(){
        const resData = await fetch(`https://api.lyrics.ovh/v1/${this.author}/${this.songName}`)

        const data = (resData.json())

        return data
    }

}

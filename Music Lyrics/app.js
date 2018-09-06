const value = {
    author : '',
    song: ''
    }

const author = document.getElementById('searchText')

const song = document.getElementById('searchSong')


author.addEventListener('change', getValue)
song.addEventListener('change', getSong)

function getValue(e){
    const authorName = (e.target.value)
   value.author = authorName 
}

function getSong(e){
    const songName = (e.target.value)
    value.song = songName
    
}



const res = document.querySelector(".btn")
res.addEventListener('click', getRes)

function getRes(e){
 e.preventDefault()
 console.log(value)

fetch(`https://api.lyrics.ovh/v1/${value.author}/${value.song}`)
    .then(function(res){
        return res.json()
    }).then(function(data){
      const  holder = document.querySelector('.lyricsV1')
       holder.innerHTML = `${data.lyrics}`
    })



}
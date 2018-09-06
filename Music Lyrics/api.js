const lyrics = new Lyrics;
// console.log(lyrics)
const authorDiv = document.getElementById('searchText')
authorDiv.addEventListener('change', (e) =>{
    const author = e.target.value;

    if(author !== ''){
       lyrics.getAuthor(author)
       console.log(lyrics)
    }
})

const songDiv = document.getElementById('searchSong')
songDiv.addEventListener('change', (e) =>{
    const song = e.target.value;

    if(song !== ''){
       lyrics.getSong(song)
       console.log(lyrics)
    }
})

const resDiv = document.querySelector('.btn')
resDiv.addEventListener('click', (e) =>{
  const data = lyrics.getLyrics()
  data.then(function(result){
      console.log(result.lyrics)
     document.querySelector('.lyricsV1').innerHTML = `<div>${result.lyrics}</div>`
  })
})

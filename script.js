// alert('welcome to spotify')
let songIndex = 0;
let audio = new Audio('music/Apna-Bana-Le(PaglaSongs).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progress');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('giffy');
let songList = Array.from(document.getElementsByClassName('songListPlay'));
let songs =[
    {songName:'Apna Bana le' ,filePath:'music/Apna-Bana-Le(PaglaSongs).mp3', coverPath:'apna.jpg'},
    {songName:'perfect' ,filePath:'music/Perfect(PaglaSongs).mp3', coverPath:'perfect.jpg'},
    {songName:'Todh' ,filePath:'music/Todh(PaglaSongs).mp3', coverPath:'todh.jpg'},
    {songName:'Tu Aake dekh le' ,filePath:'music/Tu-Aake-Dekh-Le-Ringtone(PaglaSongs).mp3', coverPath:'apna.jpg'},
    {songName:'Man meri jaan' ,filePath:'music/Tu-Maan-Meri-Jaan(PaglaSongs).mp3', coverPath:'apna.jpg'},
    {songName:'Unholy' ,filePath:'music/Unholy(PaglaSongs).mp3', coverPath:'apna.jpg'},
    
];
songItem.forEach((element,i) => {
    console.log(i,element);
    element.getElementsByTagName('img')[0] = songs[i].filePath;
    element.getElementsByTagName('span')[0] = songs[i].songName;

});
masterPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime <=0){
        audio.play();
      masterPlay.src='pause.jpg'
      gif.style.opacity=1;
    }
    else{
        audio.pause();
      masterPlay.src='play.png'
      gif.style.opacity=0;


    }
})
audio.addEventListener('timeupdate',()=>{
    // console.log('time updated');
    progres= parseInt(((audio.currentTime/audio.duration) * 100));
    // console.log(progres)
    // myProgressBar=0;
    myProgressBar.value = progres;
})
myProgressBar.addEventListener('change',()=>{
    audio.currentTime = myProgressBar.value * audio.duration /100

})
// audio.play();
songList.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songIndex =parseInt(e.target.id);
        // e.src='pause.jpg'
        e.target.classList.remove('play');
        e.target.src='pause.jpg'
        audio.src=`music/${songIndex}.mp3`
        audio.currentTime=0;
        audio.play();
        masterPlay.classList.remove('play');
        masterPlay.src='pause.jpg'
        gif.style.opacity=1;
        masterSongName.innerText= songs[songIndex].songName;
        // e.target.classList.remove('play');
        // e.target.src='pause.jpg'

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex += 1;
        audio.src=`music/${songIndex}.mp3`
        audio.currentTime=0;
        masterSongName.innerText= songs[songIndex].songName;
        audio.play();
        masterPlay.classList.remove('play');
        masterPlay.src='pause.jpg'
        gif.style.opacity=1;
    }
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
        audio.src=`music/${songIndex}.mp3`
        audio.currentTime=0;
        masterSongName.innerText= songs[songIndex].songName;
        audio.play();
        masterPlay.classList.remove('play');
        masterPlay.src='pause.jpg'
        gif.style.opacity=1;
    }
})
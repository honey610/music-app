// const axios=require("axios");


// const apiKey = 'FPSX183f3b57b3b84f7ca7c26a6117fbc998';
// const url = 'https://www.flaticon.com/api=apiKey';

// axios.get(url, {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`
//   }
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });

// let audioelement=new Audio('1.cover.mp3');
// let gif=document.querySelector("#gif");
// let masterplay=document.querySelector("#masterplay");
// let myprogressbar=document.querySelector("#myprogressbar");
// let  eachplay=document.querySelector(".eachplay");
// // let  songitem=document.querySelector(".songitem");
// let songitems=Array.from(document.getElementsByClassName("songitem"));
// console.log("Welcome to music app");
// let arr=[
//     {songName:"bgm song", filePath:"C:/Users/shish/OneDrive/Spotify/1.cover.mp3",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover.mp3",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover.mp3",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover.mp3",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover.mp3",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover",coverPath:"true love image.png"},
//     {songName:"bgm song", filePath:"1.cover",coverPath:"true love image.png"},
   

    


// ];
// songitems.forEach((element,i) => {
//     element.getElementsByTagName("img")[0].src=arr[i].coverPath;
//     element.getElementsByClassName("songname")[0].innerText=arr[i].songName;
// });

// masterplay.addEventListener("click",()=>{
// console.log("button clicked");
// if(audioelement.paused||audioelement.currentTime<=0){
//     audioelement.play();
//     masterplay.classList.remove("fa-circle-play");
//     masterplay.classList.add("fa-circle-pause");
//     gif.style.opacity=1;
// }else{
//     audioelement.pause();
//     masterplay.classList.remove("fa-circle-pause");
//     masterplay.classList.add("fa-circle-play");

// }
// });

// audioelement.addEventListener("timeupdate",()=>{
//     progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
//    myprogressbar.value=progress;

// });

// myprogressbar.addEventListener("change",()=>{
// audioelement.currentTime=myprogressbar.value*audioelement.duration/100;

// });

// Array.from(eachplay).forEach((ele)=>{
//     ele.addEventListener("click",(e)=>{
   
// console.log(e);

    
// })
// });
// Music player elements
let audioElement = new Audio();  // Initially no source
let gif = document.querySelector("#gif");
let masterPlay = document.querySelector("#masterplay");
let myProgressBar = document.querySelector("#myprogressbar");
let songItems = document.querySelectorAll(".songitem");
let prevButton = document.querySelector(".fa-backward");
let nextButton = document.querySelector(".fa-forward");

// Song list array
let songs = [
    { songName: "BGM Song 1", filePath: "1.cover.mp3", coverPath: "true love image.png" },
    { songName: "BGM Song 2", filePath: "music/2.mp3", coverPath: "img2.png" },
    { songName: "BGM Song 3", filePath: "music/3.mp3", coverPath: "img3.png" },
    { songName: "BGM Song 4", filePath: "music/4.mp3", coverPath: "img4.png" },
    { songName: "BGM Song 5", filePath: "music/5.mp3", coverPath: "img5.png" },
    { songName: "BGM Song 6", filePath: "music/6.mp3", coverPath: "img6.png" },
    { songName: "BGM Song 7", filePath: "music/7.mp3", coverPath: "img7.png" },
    { songName: "BGM Song 8", filePath: "music/8.mp3", coverPath: "img8.png" },
    { songName: "BGM Song 9", filePath: "music/9.mp3", coverPath: "img9.png" }
    
];

let currentSongIndex = 0;
songItems.forEach((element,i) => {
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    });

// Function to load song
function loadSong(index) {
    let song = songs[index];
    audioElement.src = song.filePath;
    document.querySelector(".songinfo .songname").textContent = song.songName;
    document.querySelector(".songinfo img").src = song.coverPath;
}

// Initial song load
loadSong(currentSongIndex);

// Play/Pause functionality
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Seek through the song
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Play next song
nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
});

// Play previous song
prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
});

// Play song from song list
songItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let searchInput = document.querySelector("input[type='text']");
    let songItems = document.querySelectorAll(".songitem");

    // Search Function
    searchInput.addEventListener("input", () => {
        let filter = searchInput.value.toLowerCase();
        let found = false;

        songItems.forEach((item) => {
            let songName = item.querySelector(".songname").textContent.toLowerCase();
            
            if (songName.includes(filter)) {
                item.style.display = "flex"; // Show matching songs
                found = true;
            } else {
                item.style.display = "none"; // Hide non-matching songs
            }
        });

        // Show message if no songs are found
        let noResultsMessage = document.querySelector(".no-results");
        if (!found) {
            if (!noResultsMessage) {
                let message = document.createElement("div");
                message.className = "no-results";
                message.textContent = "No songs found!";
                message.style.color = "red";
                message.style.textAlign = "center";
                message.style.marginTop = "10px";
                searchInput.parentElement.appendChild(message);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    });
});



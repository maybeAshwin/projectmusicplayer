//song list
let All_song = [
   {
     name: "STAY",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "The Kid LAROI,Justin Bieber"
   },
   {
     name: "Zaalima",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Arijith Singh, Harshdeep Kaur"
   },
   {
     name: "Stereo Hearts",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Gym Class Heroes, Adam Levine"
   },
   {
     name: "Vaathil Melle",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Sachin Warrier"
   },
   {
     name: "Bad Liar",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Imagine Dragons"
   },
   {
    name: "Driving License",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Olivia Rodrigo"
   }
];



/*tracks*/
let tracks = document.querySelector('.tracks');


for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


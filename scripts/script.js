var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

var ul = document.createElement('ul');
ul.style = "list-style-type: none; padding: 10px; background: #f0f0f0; width: 300px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);";
document.body.appendChild(ul);

for (var i = 0; i < playList.length; i++) {
  var li = document.createElement('li');
  li.innerHTML = playList[i].author + " - " + playList[i].song;
  ul.appendChild(li);
}
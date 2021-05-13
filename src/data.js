import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Fireworks",
      artist: "Nymano, Pandrezz",
      cover: "https://i.scdn.co/image/ab67616d0000b273839bbb9c3cc020ec4964f592",
      id: uuidv4(),
      active: true,
      color: ["#ea3c15", "#352919"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2074",
    },
    {
      name: "Mario Kart",
      artist: "SwuM",
      cover: "https://i.scdn.co/image/ab67616d0000b27389d9e672c065e5fa2e15a5d8",
      id: uuidv4(),
      active: false,
      color: ["#263232", "#8f4d24"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15228",
    },
    {
      name: "Cascada",
      artist: "Juan Rios",
      cover: "https://i.scdn.co/image/ab67616d0000b273ad6728c62a2f771a0c5af67d",
      id: uuidv4(),
      active: false,
      color: ["#f2c1c4", "#bf2541"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6775",
    },
    {
      name: "Imagination",
      artist: "Montell Fish",
      cover: "https://i.scdn.co/image/ab67616d0000b273a3b01849679396fdc6276db8",
      id: uuidv4(),
      active: false,
      color: ["#f5cfc2", "#895070"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6795",
    },
    {
      name: "Hereafter",
      artist: "Makzo",
      cover: "https://i.scdn.co/image/ab67616d0000b273ef41dca876323ddef2d211a3",
      id: uuidv4(),
      active: false,
      color: ["#4a5fa0", "#fcd262"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11767",
    },
    {
      name: "Belly Breathing",
      artist: "Birocratic",
      cover: "https://i.scdn.co/image/23d4bb38261aec7428f6b621a0db1a2b6ce35e9d",
      id: uuidv4(),
      active: false,
      color: ["#db8d92", "#7f99be"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2060",
    },
    {
      name: "Je T'aime",
      artist: "Sugi.wa",
      cover: "https://i.scdn.co/image/24ed37770972eb75f697dcc6af3e3820ee2413e8",
      id: uuidv4(),
      active: false,
      color: ["#5c7079", "#c9b9c4"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1823",
    },
  ];
}

export default chillHop;

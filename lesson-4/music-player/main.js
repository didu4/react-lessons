import songs from "./modules/songs.js";
import * as player from "./modules/player.js";
import {
  showPlaylist,
  showSong as showSongByDisplay,
} from "./modules/display.js";
import "./styles/theme.js";

console.log("Муз плеер:");
showPlaylist(songs);
showSongByDisplay(songs[0]);
player.showSong(songs[0]);
player.play();

player.pause();

showSongByDisplay(songs[1]);
player.showSong(songs[1]);
player.play();

player.pause();

player.stop();

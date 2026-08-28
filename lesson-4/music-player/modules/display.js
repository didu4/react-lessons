export function showSong(songName) {
  console.log(`Сейчас играет ${songName}`);
}

export function showPlaylist(songs) {
  console.log("Текущий плейлист:");
  songs.forEach((song, index) => {
    console.log(index + ". " + song);
  });
}

// export { showSong, showPlaylist };

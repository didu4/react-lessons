export function play() {
  console.log("Песня началась");
}

export function pause() {
  console.log("Песня приостановилась");
}

export function stop() {
  console.log("Воспроизведение остановилось");
}

export function showSong(songName) {
  console.log(`Плеер показыват композицию: ${songName}`);
}

// export { play, pause, stop }; - альтернативный вариант где в конце файла группируются все необходимые вещи

export const name = "SongPlayer";

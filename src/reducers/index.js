import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "Samajavaragamana", duration: "2:22" },
    { title: "bosss", duration: "1:30" },
    { title: "nuvuu vuntaa", duration: "2:50" },
    { title: "nanuu vuntaa", duration: "2:80" },
  ];
};

const selectedSongReducer = (funSelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return funSelectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});

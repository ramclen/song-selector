import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: 'Adore you', duration: '3:15' },
    { title: 'All Memories', duration: '2:00' },
    { title: 'Sucker', duration: '1:30' },
    { title: 'Roar', duration: '1:45' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
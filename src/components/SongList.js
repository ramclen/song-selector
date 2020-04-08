import React from 'react';
import { SongDetails } from './SongDetail';
import { connect } from 'react-redux';
import { selectSong } from "../actions"

class SongList extends React.Component {
  render() {
    return this.props.songs.map(song => {
      return (
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <div className="ui button" onClick={() => this.props.selectSong(song)}>Details</div>
            </div>
            <div className="content">
              {song.title}
            </div>
          </div>
        </div>
      )
    })
  }
}


const mapStateToProps = (state) => {
  return { songs: state.songs }
}


export default connect(mapStateToProps, { selectSong })(SongList)
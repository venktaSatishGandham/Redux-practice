import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Song detail</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProp = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProp)(SongDetail);

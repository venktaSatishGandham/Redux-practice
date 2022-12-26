import SongsList from "./SongsList";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
      </div>
    </div>
  );
}

export default App;
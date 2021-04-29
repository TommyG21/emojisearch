import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        😎 EmojiSearch 😎
        <input
          type="name"
          className="input"
          placeholder="What emoji are you looking for ?"
        ></input>
        <div>
          <input className="input2" placeholder="💯 100"></input>
          <input className="input2" placeholder="🔢 1234"></input>{" "}
          <input className="input2" placeholder="😀 Grinning"></input>
          <input className="input2" placeholder="😬 Grimacing"></input>
          <input className="input2" placeholder="😁 Grin"></input>
          <input className="input2" placeholder="😂 Joy"></input>
          <input className="input2" placeholder="😃 Smiley"></input>
          <input className="input2" placeholder="😄 Smile"></input>
          <input className="input2" placeholder="😅 Sweet smile"></input>
          <input className="input2" placeholder="😆 Laughing"></input>
          <input className="input2" placeholder="😇 Innocent"></input>
          <input className="input2" placeholder="😉 Wink"></input>
          <input className="input2" placeholder="😊 Blush"></input>
          <input className="input2" placeholder="🙂 Slight Smile"></input>
          <input className="input2" placeholder="🙃 Upside Down"></input>
          <input className="input2" placeholder="☺ Relaxed"></input>
          <input className="input2" placeholder="😋 Yum"></input>
          <input className="input2" placeholder="😌 Relieved"></input>
          <input className="input2" placeholder="😍 Heart Eyes"></input>
          <input className="input2" placeholder="😘 Kissing Heart"></input>
        </div>
        <div>
          <footer>
            Made with <strong>React</strong> at{" "}
            <strong>
              <a href="https://www.lereacteur.io/">le Reacteur</a>
            </strong>
            by <strong>Tom</strong>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <>
      <main>
        <h1>Todo</h1>
        <ul>
          <li>items left</li>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
          <li>Clear Completed</li>
        </ul>
        <p>Drag and drop to reorder list</p>
      </main>
      <footer>
        <p className="atrribution">
          Challenge by{" "}
          <a
            href="http://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/NahuelEF"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nahuel Fedele
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;

import "./App.css";
import { TestFormWithPreview } from "./ui";

function App() {
  return (
    <div className="App">
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <header className="App-header">
        <TestFormWithPreview />
      </header>
    </div>
  );
}

export default App;

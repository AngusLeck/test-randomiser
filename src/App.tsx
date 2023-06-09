import "./App.css";
import { TestFormWithPreview } from "./ui";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden", background: "green" }}>
      {/* <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head> */}
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.6/dist/katex.min.css"
          integrity="sha384-mXD7x5S50Ko38scHSnD4egvoExgMPbrseZorkbE49evAfv9nNcbrXJ8LLNsDgh9d"
          {...{ crossorigin: "anonymous" }}
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.6/dist/katex.min.js"
          integrity="sha384-j/ZricySXBnNMJy9meJCtyXTKMhIJ42heyr7oAdxTDBy/CYA9hzpMo+YTNV5C+1X"
          {...{ crossorigin: "anonymous" }}
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.6/dist/contrib/auto-render.min.js"
          integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05"
          {...{
            crossorigin: "anonymous",
            onload: "renderMathInElement(document.body);",
          }}
        />
      </head>
      <body className="App-header">
        <TestFormWithPreview />
      </body>
    </div>
  );
}

export default App;

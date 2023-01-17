import "./App.css";
import { useState, useEffect, useRef } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import mockText from "./mockText";

function App() {
  const [textContent, setTextContent] = useState("");
  const myRef = useRef(null);

  useEffect(() => {
    console.log(mockText);
    myRef.current.focus();
    myRef.current.value = mockText;
    myRef.current.style.height = calcHeight(mockText) + "px";
    setTextContent(myRef.current.value);
  });

  const calcHeight = (value) => {
    const numberOfLineBreaks = value.split("\n").length;
    // min-height + lines x line-height;
    const newHeight = 20 + numberOfLineBreaks * 20;
    return newHeight;
  };
  const handleKeyUp = (e) => {
    myRef.current.style.height = calcHeight(e.target.value) + "px";
    setTextContent(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <section className="edit-section">
          <div className="toolbar">
            <h3>Editor</h3>
          </div>
          <div className="editor-wrapper">
            <div className="editor">
              <textarea
                ref={myRef}
                id="editor"
                className="textarea resize-ta"
                onKeyUp={handleKeyUp}
              ></textarea>
            </div>
          </div>
        </section>
        <section className="preview-section">
          <div className="toolbar">
            <h3>Preview</h3>
          </div>
          <div className="preview-wrapper">
            <div className="preview">
              <ReactMarkdown>{textContent}</ReactMarkdown>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <p>Markdown previewer by SaVance Ford</p>
      </footer>
    </div>
  );
}

export default App;

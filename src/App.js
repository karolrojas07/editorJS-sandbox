import './App.css';

import { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ToggleBlock from 'editorjs-toggle-block';
import Undo from 'editorjs-undo';
import DragDrop from 'editorjs-drag-drop';
import InlineImage from 'editorjs-inline-image';
import BreakLine from 'editorjs-break-line';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [editor, _setEditor] = useState(
    () => new EditorJS({
      onReady: () => {
        new Undo({ editor });
        new DragDrop(editor);
      },
      autofocus: true,
      holder: 'editorjs',
      readOnly: false,
      tools: {
        header: Header,
        list: List,
        breakLine: {
          class: BreakLine,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+ENTER',
        },
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        image: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: 'your_app_name',
              clientId: 'your_client_id'
            }
          }
        },
      }
    })
  );

  const save = () => {
    editor.save().then((savedData) => {
      const output = document.getElementById("output");

      output.innerHTML = JSON.stringify(savedData, null, 4);
    });
  }

  return (
    <div className="App">
      <div> <h1> Editor JS</h1> </div>
      <div id="editorjs" />
      <button onClick={save}>Save</button>
      <pre style={{ textAlign: "left" }} id="output" />
    </div>
  );

}

export default App;

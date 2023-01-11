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
import Tooltip from 'editorjs-tooltip';
import Delimiter from "@editorjs/delimiter";

// const blocks = [
//   {
//       "id": "AcBM_cSfrf",
//       "type": "image",
//       "data": {
//           "url": "https://cdn.iconscout.com/icon/free/png-256/ice-cream-1769297-1505070.png",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "KXd_d-bQmz",
//       "type": "image",
//       "data": {
//           "url": "https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "Mhw6z0jNmW",
//       "type": "image",
//       "data": {
//           "url": "https://hips.hearstapps.com/hmg-prod/images/no-churn-cookies-and-cream-ice-cream1-1654286357.jpg?crop=1.00xw:0.752xh;0,0.147xh&resize=1200:*",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "9tUf_l6h2F",
//       "type": "image",
//       "data": {
//           "url": "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1186_1_1436970676.jpg?tr=w-800,h-800",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "_jQu8m8FXr",
//       "type": "image",
//       "data": {
//           "url": "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "m5MKmm_3qq",
//       "type": "image",
//       "data": {
//           "url": "https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "oUQfPpaepZ",
//       "type": "image",
//       "data": {
//           "url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/10/121036.jpg",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   },
//   {
//       "id": "Cz4HfIo71R",
//       "type": "image",
//       "data": {
//           "url": "https://img.freepik.com/free-vector/hand-drawn-ice-cream-pack_23-2148974981.jpg?w=2000",
//           "caption": "",
//           "withBorder": false,
//           "withBackground": false,
//           "stretched": false
//       }
//   }
// ]


function App() {
  // eslint-disable-next-line no-unused-vars
  const [editor, _setEditor] = useState(
    () => new EditorJS({
      onReady: () => {
        const undo = new Undo({ editor });
        new DragDrop(editor);
        // undo.initialize(blocks);
      },
      onChange: (instance, event) => {
        console.log("onChange", { instance, event });
      },
      // data: { blocks },
      autofocus: true,
      holder: 'editorjs',
      readOnly: false,
      tools: {
        header: Header,
        list: List,
        delimiter: Delimiter,
        breakLine: {
          class: BreakLine,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+ENTER',
        },
        tooltip: {
          class: Tooltip,
          config: {
            location: 'left',
            highlightColor: '#FFEFD5',
            underline: true,
            backgroundColor: '#154360',
            textColor: '#FDFEFE',
            holder: 'editorjs',
          }
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
      <div className='container'>
        <div id="editorjs" />
      </div>
      <button onClick={save}>Save</button>
      <pre style={{ textAlign: "left" }} id="output" />
    </div>
  );

}

export default App;

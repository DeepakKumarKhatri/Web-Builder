import React, { useEffect, useState } from "react";
import 'grapesjs/dist/css/grapes.min.css';
import "./css/grapes.min.css";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsCustome from "grapesjs-custom-code";
import gsTap from "grapesjs-tabs";

function myPlugin(editor) {
  editor.Blocks.add("my-first-block", {
    label: "Demo Plugin",
    content: '<div class="my-block">This is a simple block</div>',
  });
}

const App = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!pluginLoaded) {
      setPluginLoaded(true);
    } else if (!editor) {
      const e = grapesjs.init({
        color: "white",
        height: "100vh",
        width: "auto",
        container: "#g",
        fromElement: true,
        plugins: [gsWebpage, gsCustome, gsTap, myPlugin],
        storageManager: {
          type: "remote",
          autosave: false,
          autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
      });
      setEditor(e);
    }
  }, [pluginLoaded, editor]);

  return <div id="g" className="h" />;
};

export default App;

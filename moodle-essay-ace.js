/*
A script to include an Ace editor in a Moodle Essay question.

JMR@ua.pt 2024

## How to use

*/

//let ace = require("https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/ace.min.js");
//import ace from "https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/ace.min.js"

let editor = null;
let mdl_ta = null;
var ACE_OPTIONS;

window.onload = function() {

    try {
        // Get original textarea in Moodle essay question
        mdl_ta = document.querySelector("textarea.form-control");
     
        // Hide its parent element (a <div>)
        mdl_ta.parentElement.hidden = true;
        //mdl_ta.hidden = true;

        // Default options for editor
        const defaultOPTIONS = {
            theme: "ace/theme/chrome",
            mode: "ace/mode/javascript",
            fontSize: "1rem",
            autoScrollEditorIntoView: true,
        }

        // Create the ace editor with default options
        editor = ace.edit("ace_editor", defaultOPTIONS);

        // Apply global options, then data attribute options
        editor.setOptions(ACE_OPTIONS || {});
        editor.setOptions(editor.container.dataset);

        // Fill editor with initial value
        editor.setValue(mdl_ta.textContent);

        // Synchronize moodle essay textarea whenever text modified
        editor.session.on('change', function(delta) {
            mdl_ta.textContent = editor.getValue();
        });
        
        // Set editor height based on moodle editor's rows
        let editorStyle = getComputedStyle(editor.container);
        const btw = editorStyle.borderTopWidth;
        const bbw = editorStyle.borderBottomWidth;
        editor.container.style.height =
            `calc(${mdl_ta.rows}lh + ${btw} + ${bbw})`;
        
        // Make the editor adjust to resize events
        editor.container.addEventListener("resize", function(e){
            editor.resize();
        });
    } catch (e) {
    }
};


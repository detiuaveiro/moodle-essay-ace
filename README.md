# moodle-essay-ace

A script to substitute the editor in a Moodle essay question with
the [Ace code editor][ace].

[ace]: https://ace.c9.io/

## Motivation

If you're a teacher creating essay type questions in Moodle,
you may wish the editor had syntax highlighting.
Now you can have that.

## How to do it

1.  Create (or edit) your essay-type question as usual.
1.  In `Response options / Response format`,
    select `Plain text, monospaced font`.
1.  In `Question text`, add the HTML code below.
    You may remove or adjust the "Optional" parts.
    ```html
    <!-- Embed the Ace code editor from your favorite source -->
    <script src="https://cdn.jsdelivr.net/npm/ace-builds/src-min-noconflict/ace.min.js"></script>

    <!-- Embed the Moodle Essay Ace script -->
    <script src="https://cdn.jsdelivr.net/gh/detiuaveiro/moodle-essay-ace/moodle-essay-ace.js"></script>

    <!-- Optional: include CSS properties for the editor container -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/detiuaveiro/moodle-essay-ace/ace-editor-resize.css">

    <!-- Optional: set options for Ace in a global var -->
    <script>
    var ACE_OPTIONS = {
        theme: "ace/theme/xcode",
    }
    </script>

    <!-- Insert the <div id="ace_editor"> to contain the Ace editor! -->
    <!-- Optional: set additional options using data- attributes. -->
    <div id="ace_editor" data-mode="ace/mode/javascript" data-font-size="1rem" >
    If you're reading this, some error occurred.  The Ace editor should be here!
    </div>
    ```

__NOTE:__
I strongly recommend that you:
- [Set your default editor][mdlSetEditor] to the "plain text area" in Moodle preferences,
  _before_ editing the question.
- Select `HTML format` or `Markdown` on the `Question text` field.
- Set to `Plain text format` for the `Response template`.

[mdlSetEditor]: https://docs.moodle.org/en/Text_editor_FAQ#Can_I_change_editors?



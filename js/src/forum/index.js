/*global s9e*/

import TextEditor from 'flarum/components/TextEditor';
import ComposerBody from 'flarum/components/ComposerBody';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import {extend} from 'flarum/extend';

app.initializers.add('preview-discussion', () => {
    let index = 1;
    let previewMode = false;

    extend(DiscussionComposer.prototype, 'init', function () {
        this.editor.props.preview = () => {
            previewMode = !previewMode;
        };
    });

    extend(TextEditor.prototype, 'init', function () {
        this.textareaId = 'textarea' + (index++);
    });

    extend(TextEditor.prototype, 'view', function (vdom) {
        // Check id to avoid conflicts with markdown extension
        if (!vdom.children[0].attrs.id) {
            vdom.children[0].attrs.id = this.textareaId;
        }
    });

    extend(TextEditor.prototype, 'oninput', function () {
        // s9e.TextFormatter.preview(this.value, previewDOM);
    });

    extend(ComposerBody.prototype, 'headerItems', function (items) {
        items.add('preview-discussion', <div>Loading Preview</div>, 50);
        console.log(items.get('preview-discussion'));
        // if (previewMode) {
        //     previewDOM.style.display = "block";
        // } else {
        //     previewDOM.style.display = "none";
        // }
    });
});

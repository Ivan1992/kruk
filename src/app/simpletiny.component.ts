import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>
            <br />
            <h3>{{output}}</h3>
            <hr />`
})
export class SimpletinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorContentChange  = new EventEmitter<any>();

  editor;
  output;

  ngAfterViewInit() {
    console.log("ngAfterInit<<<<<<<<<<<<<<");
    tinymce.init({
      selector: '#' + this.elementId,
      height: 500,
      toolbar: 'mybutton',
      plugins: ['table'],
      menubar: false,
      skin_url: 'assets/skins/lightgray',
      setup: editor => {

        this.editor = editor;

        editor.on('change', () => {
          console.log("DETECTED CHANGE<<<");
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
          this.output = editor.getContent();
        });

        editor.addButton('mybutton', {
          text: 'TEST',
          icon: false,
          onclick: function () {
            editor.insertContent('&nbsp;<b>It\'s my button!</b>&nbsp;');
          }
        });

        editor.addButton('mybutton', {
          type: 'splitbutton',
          text: 'My button',
          icon: false,
          onclick: function() {
            editor.insertContent('&nbsp;<strong>You clicked the button!</strong>');
          },
          menu: [{
            text: 'Menu item 1',
            onclick: function() {
              editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
            }
          }, {
            text: 'Menu item 2',
            onclick: function() {
              editor.insertContent('&nbsp;You clicked menu item 2!');
            }
          }]
        });

      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
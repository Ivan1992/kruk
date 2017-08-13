import { 
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output } from '@angular/core';
  import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.css']
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorContentChange  = new EventEmitter<any>();

  editor;
  out = "qqqq";

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit() {
    console.log(">>>>AFTER INIT");
    tinymce.init({
      selector: '#' + this.elementId,
      height: 500,
      toolbar: 'mybutton',
      forced_root_block: false,
      force_p_newlines: false,
      plugins: ['table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.out = editor.getContent();
          this.ref.detectChanges();
          //const content = editor.getContent();
          //this.onEditorContentChange.emit(content);
        });

        editor.addButton('mybutton', {
          text: 'TEST',
          icon: false,
          onclick: function () {
            editor.insertContent("&nbsp;<table style='display: inline-table;'><tr><td>fa</td></tr><tr><td>fa</td></tr></table>&nbsp;");
          }
        });

        editor.addButton('mybutton', {
          type: 'splitbutton',
          text: 'Крюк',
          icon: false,
          onclick: function() {
            editor.insertContent("&nbsp;hello<table style='display: inline-table;'><tr><td>fa</td></tr><tr><td>fa</td></tr></table>world&nbsp;");
          },
          menu: [{
            text: 'какое-то меню 1',
            onclick: function() {
              editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
            }
          }, {
            text: 'какое-то меню 2',
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
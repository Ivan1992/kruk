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
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
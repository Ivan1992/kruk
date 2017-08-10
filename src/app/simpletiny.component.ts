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
      plugins: ['table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('change', () => {
          console.log("DETECTED CHANGE<<<");
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
          this.output = editor.getContent();
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
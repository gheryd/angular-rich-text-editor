import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core';

@Component({
  selector: 'app-root',
  template: `
    <ckeditor [editor]="Editor" [config]="config" [(ngModel)]="model" [disabled]="disabled"></ckeditor>
    <div><input type="checkbox" [(ngModel)]="disabled"> disabled</div>
    <div>source</div>
    <pre>{{model}}</pre>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled = false;
  public Editor = ClassicEditor
  config:EditorConfig = {
    language: 'it',
    toolbar: {
      removeItems: []
    } 
  }
  model: string = "";
}


/*
0

This is what I get for ClassicEditor [ "selectAll", "undo", "redo", "bold", "italic", "blockQuote", "uploadImage", "imageUpload", "heading", "imageTextAlternative", "toggleImageCaption", "imageStyle:inline", "imageStyle:alignLeft", "imageStyle:alignRight", "imageStyle:alignCenter", "imageStyle:alignBlockLeft", "imageStyle:alignBlockRight", "imageStyle:block", "imageStyle:side", "imageStyle:wrapText", "imageStyle:breakText", "indent", "outdent", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells" ]
*/
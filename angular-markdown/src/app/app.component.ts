import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-markdown';

  markdown = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  // text = require("!!raw-loader!/src/app/file.md");

  onLoad(e: any) {
    console.log('load')
  }

  onError(error: any) {
    console.log('error')
  }

  ngOnInit() {
    // this.setMarkdown('test.md');
  }

  // setMarkdown(file: string) {
  //   const path = 'raw-loader!./assets/md/' + file;
  //   this.markdown = require(path);
  // }
}

import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App One';
  showTitle = true;

  handleClick(evt: any, prod: any) {
    console.log(prod);
  }
  handleMouseOver(pName: string) {
    console.log(pName);
  }

  updateTitle(inp: any) {
    this.title = inp;
  }
  updateTitleViaAButton(inp: string) {
    this.title = inp;
  }
  updateTitleViaFormSubmit(inp: string) {
    this.title = inp;
  }
}

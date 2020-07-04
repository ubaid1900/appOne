import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App One';
  showTitle = true;

  products = [
    { id: 1, productName: 'Laptop', brand: 'Lenovo' },
    { id: 2, productName: 'Laptop', brand: 'Dell' }];

  handleClick(evt: any, prod: any) {
    console.log(prod);
  }
  handleMouseOver(pName: string) {
    console.log(pName);
  }

  updateTitle(inp: any) {
    console.log(inp);

  }
}

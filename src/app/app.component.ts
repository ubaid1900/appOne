import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App One';
  showTitle = true;
  product = { id: 1, productName: 'Laptop', brand: 'Lenovo' };

  products = [
    { id: 1, productName: 'Laptop', brand: 'Lenovo' },
    { id: 2, productName: 'Laptop', brand: 'Dell' }];


}

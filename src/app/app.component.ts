import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  renderers = [
    ...angularMaterialRenderers
  ];
  uischema = uischemaAsset;
  schema = schemaAsset;
  data = {
    "age": 12345
  };

  title: string = "Bug in multipleOf";
  constructor() {
  }
}

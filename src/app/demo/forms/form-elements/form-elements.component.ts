import { Component, OnInit } from '@angular/core';
import { routeAnimation } from "../../../route.animation";
import * as _ from 'lodash';

@Component({
  selector: 'ms-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class FormElementsComponent implements OnInit {

  switch1: boolean = false;
  switch2: boolean = true;
  switch3: boolean = true;
  switch4: boolean = false;
  switch5: boolean = true;

  checkbox1: boolean = false;
  checkbox2: boolean = true;
  checkbox3: boolean = true;
  checkbox4: boolean = false;
  checkbox5: boolean = true;

  select1: string;

  inputFieldHTML: string = `
  <div fxLayout="column" fxLayout.gt-md="row">
    <md-input-container fxFlex>
      <input md-input
             placeholder="First Name">
    </md-input-container>
    <md-input-container fxFlex>
      <input md-input
             placeholder="Last Name">
    </md-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <md-input-container fxFlex dividerColor="accent">
      <input md-input
             placeholder="Pre-filled Input + Accent color" value="Material Design">
    </md-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <md-input-container fxFlex>
      <input md-input
             placeholder="Address">
      <span md-prefix><md-icon>place</md-icon></span>
    </md-input-container>
    <md-input-container fxFlex>
      <input md-input
             placeholder="City">
      <span md-prefix><md-icon>location_city</md-icon></span>
    </md-input-container>
    <md-input-container fxFlex>
      <input md-input
             placeholder="Country">
      <span md-suffix><md-icon>local_airport</md-icon></span>
    </md-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <md-input-container fxFlex>
      <input md-input
             placeholder="Character count (max. 100)"
             maxlength="100"
             #characterCountHintExample
             value="Hello! How are you today?">
      <md-hint align="end">{{ characterCountHintExample.value.length }} / 100</md-hint>
    </md-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <md-input-container fxFlex>
      <input md-input
             placeholder="Primary Color">
    </md-input-container>
    <md-input-container dividerColor="accent" fxFlex>
      <input md-input
             placeholder="Accent Color">
    </md-input-container>
    <md-input-container dividerColor="warn" fxFlex>
      <input md-input
             placeholder="Warn Color">
    </md-input-container>
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return _.escape(text);
  }
}

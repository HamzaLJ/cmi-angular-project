import { Component } from '@angular/core';
import * as cmi from './cmi.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMI angular project';
  //Generated hash from cmi.js
  /* Please note that the form submission wasn't done in a proper Angular form should be posted and this
  only debug the cause why copying the same HTML work doesn't work on an Angular project */
  hashCMI = cmi.submitformpaiement();
}

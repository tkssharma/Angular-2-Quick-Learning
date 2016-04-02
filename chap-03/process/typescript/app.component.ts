import {Component} from 'angular2/core';
import {HelloComponent} from 'helloComponent';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html' ,
  directive: [HelloComponent]
})

export class AppComponent {

}

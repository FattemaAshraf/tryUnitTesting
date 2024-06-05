import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tryUnitTesting';

  sayHello(){
    return 'Hello World!'
  }
  // sayHello1(){
  //   return 'Hello World!'
  // }
}

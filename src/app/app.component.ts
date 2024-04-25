import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NestComponent } from './nest/nest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}

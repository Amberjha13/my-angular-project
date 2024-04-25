import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
    
}

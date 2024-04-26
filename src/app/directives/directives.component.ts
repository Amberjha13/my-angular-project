import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  name: string = ''
  buttonClicked: boolean = false
  loop: Array<Number> = [1,2,3,4]



  onButtonClick(): void {
    this.buttonClicked = true
  }

  onInputFocus(): void {
    this.buttonClicked = false
  }

}

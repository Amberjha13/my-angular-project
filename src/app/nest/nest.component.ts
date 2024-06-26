import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IntroComponent } from "../intro/intro.component";
import { ServerComponent } from "../server/server.component";

@Component({
    selector: 'app-nest',
    templateUrl: './nest.component.html',
    imports:[FormsModule,IntroComponent, ServerComponent],
    standalone: true
})
export class NestComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    componentName:string = 'NestComponent'
    disabledProp: boolean = false
    message: string= 'no message has been passed'
    inputMessage: string = 'Default Message'
    inputMessageDefaut: string = 'Hi'

    constructor() {
        setTimeout(()=>{this.disabledProp = true}, 3000)
    }

    onInputChange(event: Event): void {
           this.inputMessage = (<HTMLInputElement>event.target).value
    }

    onButtonClick(): void {
        this.message = 'Message has been passed '+this.inputMessage
    }
    
    getComponetName(): string{
        return this.componentName
    }


}
import { Component, Input} from '@angular/core'; // from Parent To Child
import { Output, EventEmitter } from '@angular/core'; // From Child To Parent

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent {

  //parent to child message
  @Input() childrenListen: string = "";  //Input decorator is used to listen from Parent to Child

  //Note from Parent to child, you need...@Input Decorator in child component, Property Binding in the parent component html


  //child to parent message
  messageFromChild1ToParent: string = "Okay Mummy and Daddy, we've heard";
  message: string = "";

  @Output() firstChildMessageEmit$: EventEmitter<any> = new EventEmitter();


  speakToParent(){
    this.firstChildMessageEmit$.emit(this.messageFromChild1ToParent);
    this.message = this.messageFromChild1ToParent
  }

  //Note from Child to Parent, you need... @Output decorator,  Event emitter in Child component, and Event binding in the parent component html

}

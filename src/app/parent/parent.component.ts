import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  //Child to Parent ... @Output used

  parentRecievesMessage: string = "";

  recieveFirstChildMessage(event: any){
    this.parentRecievesMessage = event;
    console.log("event message from chaild1>>", event);
  }

  //Parent to Child ... @Input used
  messageFromParent: string = "";

  speakToChild(){
    this.messageFromParent = "Children, Let's all come for Morning Prayers";
  }

}

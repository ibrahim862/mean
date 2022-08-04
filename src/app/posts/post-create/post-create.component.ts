import { Component, EventEmitter,Output } from "@angular/core";

@Component({
  selector: 'app-post-create',
templateUrl: './post-create.component.html',
styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() pc = new EventEmitter();

  oAdd(){
    const post = {title:this.enteredTitle,
       content:this.enteredContent};
      this.pc.emit(post)
    }

}

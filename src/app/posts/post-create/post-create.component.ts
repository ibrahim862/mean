import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
templateUrl: './post-create.component.html',
styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredValue = '';
  newPost ='no';

  oAdd(){
    this.newPost = this.enteredValue;
      //  this.newPost = postInput.value;
      //alert('post add')
    }
}

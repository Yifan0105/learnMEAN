import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = postInput.value;
  }
}

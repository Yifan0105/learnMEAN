import { Component } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostCreateComponent]
})
export class AppComponent {
  title = 'learnMEAN';
}


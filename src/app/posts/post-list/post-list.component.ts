import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
selector: 'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  post = [
{    title: '1 post', content: 'this is the 1 post'},
{    title: '2 post', content: 'this is the 2 post'},
{    title: '3 post', content: 'this is the 3 post'}

 ];
}

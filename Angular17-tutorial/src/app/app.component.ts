import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userOcuppation: string = 'Developer';
  city = 'San Francisco';
  childsMessage: string = '';

  reciveEmision($event: string): void {
    this.childsMessage = $event;
  }
}

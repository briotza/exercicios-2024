import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showMore = false;
  showIdeas = true;
  createTopicClicked = false;
  topicSent = false;

  readMore() {
    this.showMore = !this.showMore;
  }

  createTopic() {
    this.showIdeas = false;
    this.createTopicClicked = true;
  }

  send() {
    this.createTopicClicked = false;
    this.topicSent = true;
  }
}

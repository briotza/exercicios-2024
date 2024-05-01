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
  topicClosed = true;
  topicOpen = false;
  hiddenBar = false;

  //expandir resumo
  readMore() {
    this.showMore = !this.showMore;
  }

  //botão criar tópico e criar novo tópico
  createTopic() {
    this.showIdeas = false;
    this.createTopicClicked = true;
  }

  //botão enviar
  send() {
    this.createTopicClicked = false;
    this.topicSent = true;
  }

  //abrir comentários do tópico
  openTopic() {
    this.topicClosed = false;
    this.topicOpen = true;
  }

  //fechar comentários do tópico
  closeTopic() {
    this.topicClosed = true;
    this.topicOpen = false;
  }

  //abrir barra de navegação em telas menores
  openHiddenBar() {
    this.hiddenBar = !this.hiddenBar;
  }
}

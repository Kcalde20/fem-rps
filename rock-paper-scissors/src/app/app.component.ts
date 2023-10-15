import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ScoreService } from './services/score.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rock-paper-scissors';

  constructor(
    public modalService: ModalService,
    public scoreService: ScoreService,
    public gameService: GameService
    ){};
}

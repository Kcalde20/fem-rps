import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent {

  selectPlayerChoice(choice: string) {
    this.gameService.selectPlayerChoice(choice);
  }

  constructor(public gameService: GameService){}
}

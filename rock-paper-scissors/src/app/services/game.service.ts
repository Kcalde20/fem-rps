import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // Behavior Subjects
  private computerChoice = new BehaviorSubject<string | null>(null);
  private playerChoice = new BehaviorSubject<string | null>(null);

  // Observables
  readonly computerChoice$ = this.computerChoice.asObservable();
  readonly playerChoice$ = this.playerChoice.asObservable();

  // Methods
  selectComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3-1 + 1) + 1);
    let choice = null;
    switch(randomNumber) {
      case 1:
        choice = "Rock";
        break;
      case 2:
        choice = "Paper";
        break;
      case 3:
        choice = "Scissors";
        break;
      default:
        console.log('selectComputerChoice method failed');
    }
    this.computerChoice.next(choice);
  }

  selectPlayerChoice(choice: string) {
    this.playerChoice.next(choice);
    this.selectComputerChoice();
    this.compareChoices(this.playerChoice.value, this.computerChoice.value);
  }

  compareChoices(p:string | null, c: string | null){
    if (p == c){
      console.log('Tie');
    } else if (p == "Rock" && c == "Scissors"){
      console.log('Player Wins');
      this.scoreService.increaseScore();
    } else if (p == "Rock" && c == "Paper"){
      console.log('Computer Wins');
      this.scoreService.decreaseScore();
    } else if (p == "Scissors" && c == "Paper"){
      console.log('Player Wins');
      this.scoreService.increaseScore();
    } else if (p == "Scissors" && c == "Rock"){
      console.log('Computer Wins');
      this.scoreService.decreaseScore();
    } else if (p == "Paper" && c == "Rock"){
      console.log('Player Wins');
      this.scoreService.increaseScore();
    } else if (p == "Paper" && c == "Scissors"){
      console.log('Computer Wins');
      this.scoreService.decreaseScore();
    } else {
      console.log('compareChoices method Failed');
    }

  }

  resetComputerChoice() {
    this.computerChoice.next(null);
  }


  constructor(private scoreService: ScoreService) { }
} 

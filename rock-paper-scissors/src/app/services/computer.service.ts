import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  // Behavior Subjects
  private computerChoice = new BehaviorSubject<string | null>(null);

  // Observables
  readonly computerChoice$ = this.computerChoice.asObservable();

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

  resetComputerChoice() {
    this.computerChoice.next(null);
  }


  constructor() { }
} 

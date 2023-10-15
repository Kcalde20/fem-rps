import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  // Behavior Subjects
  private score = new BehaviorSubject<number>(0)

  // Observables
  readonly score$ = this.score.asObservable();

  // Methods
  increaseScore() {
    let newScore = this.score.value + 1;
    this.score.next(newScore);
  }
  
  decreaseScore() {
    let newScore = this.score.value - 1;
    this.score.next(newScore);
  }

  resetScore() {
    this.score.next(0);
  }

  constructor() { }
}

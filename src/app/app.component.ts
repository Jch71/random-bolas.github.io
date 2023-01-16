import { Component } from '@angular/core';

const allFigures = [
  'spin forward',
  'spin reverse',
  'arret vertical haut',
  'catch and release',
  'arret horizontal droite',
  'arret horizontal gauche',
  'arret vertical bas'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'program-bolas';
  leftFigures: String[] = [];
  rightFigures: String[] = [];
  length: number = 5;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.allSuffle();
    
  }

  allSuffle () : void {
    this.leftFigures = this.shuffle();
    this.rightFigures = this.shuffle();
  }

  shuffle() {
   let list = [];
  
    for (var index = 0; index < this.length; index++) {
      var element = allFigures[Math.floor(Math.random() * allFigures.length)];
      list.push(element);
    }

    return list;

  }

}

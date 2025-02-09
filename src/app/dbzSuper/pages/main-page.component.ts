import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbzsup-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  public characters: Character[] = [{
    name:'Krillin',
    power: 1000
  },{
    name:'Goku',
    power:9500
  },{
    name:'Trunks',
    power: 7000
  }];

  onNewCharacter( character: Character ):void{
    this.characters.push(character);
  }

}

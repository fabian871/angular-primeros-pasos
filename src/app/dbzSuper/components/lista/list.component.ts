import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbzSup-list',
  templateUrl: './list.component.html'
})

export class ListComponent{
  // lo que busco es hacer dinamico, voy a hacerlo aca para renderizar
  @Input()
  public CharacterList: Character[]=[{
    name:'Trunks',
    power: 5000
  }];

}

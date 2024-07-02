import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';

@Component({
  selector: 'dbzSup-add-character',
  templateUrl: './character.component.html'
})

export class CharacterComponent  {

  @Output()
  onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  // metodo para emitir     "COMPONENTE HIJO"
  emitCharacter() {
    console.log(this.character)

    this.onNewCharacter.emit(this.character); // aca voy al character.component.html y en <dbz-add-character> agrego este evento (onNewCharacter). Entonces tambien debo ir al
    //componente padre y

    this.character.name = '';
    this.character.power = 0;
  }
}

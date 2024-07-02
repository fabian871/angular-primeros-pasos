import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/lista/list.component';
import { CharacterComponent } from './components/add-character/character.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    CharacterComponent
  ]
})
export class DbzSupModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; // alex
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { CharacterNameComponent } from './character-name/character-name.component';
import { ArchetypeFilterComponent } from './archetype-filter/archetype-filter.component';
import { ArchetypeListComponent } from './archetype-list/archetype-list.component';
import { ArchetypeCardComponent } from './archetype-card/archetype-card.component';

import { SwappDataService } from './swapp-data.service';


// alex
const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'selection', component: SelectionScreenComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SelectionScreenComponent,
    CharacterNameComponent,
    ArchetypeFilterComponent,
    ArchetypeListComponent,
    ArchetypeCardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes, { useHash: true }),
      ReactiveFormsModule
  ],
  providers: [SwappDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

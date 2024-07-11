import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { RulesComponent } from './containers/rules/rules.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'regulamin', component: RulesComponent},
    { path: '**', component: PageNotFoundComponent }
];

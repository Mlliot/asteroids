import { Routes } from '@angular/router';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { ObjectsComponent } from './objects/objects.component';

export const routes: Routes = [
    { path: 'object', component: ObjectsComponent }, // default route
    { path: 'solar', component: SolarSystemComponent },
    { path: '', redirectTo: 'object', pathMatch: 'full' }, // redirect empty path to 'object'
    { path: "**", redirectTo: 'object', pathMatch: 'full'},
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomDialogComponent } from './pages/custom-dialog/custom-dialog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PresetsMenuComponent } from './pages/presets-menu/presets-menu.component';

const routes: Routes = [
  { path: '', component: PresetsMenuComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

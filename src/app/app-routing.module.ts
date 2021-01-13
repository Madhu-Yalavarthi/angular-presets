import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundWallPaperComponent } from './pages/background-wall-paper/background-wall-paper.component';
import { CustomDialogComponent } from './pages/custom-dialog/custom-dialog.component';

const routes: Routes = [
  { path: 'custom-dialog', component: CustomDialogComponent },
  { path: 'background-wall-paper', component: BackgroundWallPaperComponent },
  { path: '', redirectTo: 'background-wall-paper', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

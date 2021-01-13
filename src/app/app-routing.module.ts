import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundWallPaperComponent } from './pages/background-wall-paper/background-wall-paper.component';
import { CustomDialogComponent } from './pages/custom-dialog/custom-dialog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'custom-dialog', component: CustomDialogComponent },
  { path: 'background-wall-paper', component: BackgroundWallPaperComponent },
  { path: '', redirectTo: 'background-wall-paper', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

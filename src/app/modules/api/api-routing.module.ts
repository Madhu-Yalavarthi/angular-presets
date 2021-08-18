import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ApiComponent } from './api.component'
import { CorsCheckComponent } from './cors-check/cors-check.component'

const routes: Routes = [
  {
    path: 'api',
    component: ApiComponent,
    children: [
      { path: 'cors-checker', component: CorsCheckComponent },
      { path: '', redirectTo: 'cors-checker', pathMatch: 'full' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiRoutingModule {}

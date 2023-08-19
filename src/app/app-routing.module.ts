import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/static-page/not-found-page/not-found-page.component';
import { PathResolveService } from './path-resolve.service';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./module/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./module/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'lastloginalvin1406',
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

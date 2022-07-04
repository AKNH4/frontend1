import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './private/components/home/home.component';
import { PrivateRoutes } from './private/private.routing';
import { PublicRoutes } from './public/public.routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PublicRoutes, PrivateRoutes],
  exports: [RouterModule],
})
export class AppRoutingModule {}

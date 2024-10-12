import { Routes } from '@angular/router';
import { scoreGuard } from '../guards/score.guard';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./users-dashboard/users-dashboard.component').then(c => c.UsersDashboardComponent),
        title: 'Users Dashboard'
    },
    {
        path: 'user-profile/:username/:score',
        canActivate: [scoreGuard],
        loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent),
        title: 'Users Profile'
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
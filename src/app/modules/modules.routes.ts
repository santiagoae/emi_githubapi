import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./users-dashboard/users-dashboard.component').then(c => c.UsersDashboardComponent),
        title: 'Users Dashboard'
    },
    {
        path: 'user-profile',
        loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent),
        title: 'Users Profile'
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
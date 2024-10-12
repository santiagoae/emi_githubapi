import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./users-dashboard/users-dashboard.component').then(c => c.UsersDashboardComponent),
        title: 'Users Dashboard'
    }
];
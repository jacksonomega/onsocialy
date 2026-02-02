import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full'
    },
    {
        path: 'privacidad',
        loadComponent: () => import('./pages/legal/privacy/privacy.component').then(m => m.PrivacyComponent)
    },
    {
        path: 'terminos',
        loadComponent: () => import('./pages/legal/terms/terms.component').then(m => m.TermsComponent)
    },
    {
        path: 'cookies',
        loadComponent: () => import('./pages/legal/cookies/cookies.component').then(m => m.CookiesComponent)
    }
];

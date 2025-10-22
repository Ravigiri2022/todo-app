import { Routes } from '@angular/router';
import { AuthLayout } from './pages/auth/auth-layout/auth-layout';
import { Login } from './pages/auth/login/login';
import { Signup } from './pages/auth/signup/signup';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth/signup/signup').then((m) => m.Signup),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard-content/dashboard-content').then(
            (m) => m.DashboardContent
          ),
      },
    ],
  },
];

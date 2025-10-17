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
    loadComponent: () => AuthLayout,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
      {
        path: 'forgot-password',
        component: ForgotPassword,
      },
    ],
  },
];

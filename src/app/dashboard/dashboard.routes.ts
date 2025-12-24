import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('../pages/main-page/main-page.component').then((m) => m.MainPageComponent),
      },
      {
        path: 'requests',
        children: [
          {
            path: 'onboarding',
            loadComponent: () =>
              import(
                '../pages/create-request/onboarding-page.component/onboarding-page.component'
              ).then((m) => m.OnboardingPageComponent),
          },
        ],
      },

      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ],
  },
];

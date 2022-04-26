import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AllPage.vue') },
      {
        path: 'launched',
        component: () => import('src/pages/LaunchedPage.vue'),
      },
      {
        path: 'upcomimg',
        component: () => import('src/pages/UpcomimgPage.vue'),
      },
    ],
  },
];

export default routes;

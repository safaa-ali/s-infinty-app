import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'dashboard',
    icon: { icon: 'menu-dashboard', pack: 'svg' },
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'projects',
    icon: { icon: 'menu-organizations', pack: 'svg' },
    link: '/projects',
    pathMatch: 'prefix',
  },
  {
    title: 'users',
    icon: { icon: 'menu-users', pack: 'svg' },
    link: '/users',
    pathMatch: 'prefix',
  },
];

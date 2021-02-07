import { NbMenuItem } from '@nebular/theme';
export const map_menu: NbMenuItem[] = [
  {
    title: 'Documents',
    icon: { icon: 'doc', pack: 'svg' },
    link: 'documents',
    home: true,

  },
  {
    title: 'Image Gallery',
    icon: { icon: 'img', pack: 'svg' },
    link: 'images',
  },
  {
    title: 'Video Gallery',
    icon: { icon: 'video', pack: 'svg' },
    link: 'videos',
  },
  {
    title: 'Models',
    icon: { icon: 'cube', pack: 'svg' },
    link: 'models',
  },
  {
    title: 'Point Cloud',
    icon: { icon: 'forge', pack: 'svg' },
    link: 'point-cloud',
  },
  {
    title: 'Sensors Analysis',
    icon: { icon: 'search', pack: 'svg' },
    link: 'analysis',
  },
  {
    title: 'Poi Managment',
    icon: { icon: 'hand', pack: 'svg' },
    link: 'POI',
  },
];

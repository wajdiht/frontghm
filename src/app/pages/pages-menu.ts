import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Contrat d`adhèsion',
    icon: 'book-open-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Tiers',
    icon: 'person-add-outline',
    children: [
      {
        title: 'person physique',
        link: './iot-dashboard/weather',
      },
      {
        title: 'person libiral',
        link: './iot-dashboard/temperature',
      },
      {
        title: 'person moral ',
        link: './iot-dashboard/security-cameras',
      },
    ],
  },
  {
    title: 'Gestion des demande',
    icon: 'archive-outline',
    
    children: [
      {
        title: 'Demande rib',
        link: '/pages/layout/list',
      },
      {
        title: 'Demande adress',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Demande contact',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },

];

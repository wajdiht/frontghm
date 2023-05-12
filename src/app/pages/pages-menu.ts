import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Contrat adhèsion',
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
    title: 'consulter les demande ',
    icon: 'lock-outline',
    
    children: [
      {
        title: 'changement rib',
        link: '/pages/layout/list',
      },
      {
        title: 'changement adress',
        link: '/pages/layout/stepper',
      },
      {
        title: 'changement contact',
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

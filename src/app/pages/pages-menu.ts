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
    link: '/pages/iot-dashboard',
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

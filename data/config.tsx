import { NextSeoProps } from 'next-seo'
import { FaFacebook } from 'react-icons/fa'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'JumpTown',
    description: 'JumpTown - vienas didžiausių batutų parkų Europoje. Batutų nuoma Panevėžyje su pristatymu visoje Lietuvoje.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'pricing',
        label: 'Batutų nuoma',
        href: '/batutai',
      },
      {
        id: 'kontaktai',
        label: 'Kontaktai',
        href: '/kontaktai',
      },
        {
        id: 'terms-conds',
        label: 'Sąlygos ir taisyklės',
        href: '/salygos',
      },
      // {
      //   id: 'galery',
      //   label: 'Galerija',
      // },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    links: [
          {
      href: 'tel:+37061119833',      
      label: '+37061119833',
    },
    {
      href: 'mailto:dragunasdomas@gmail.com', // el. paštas
      label: 'dragunasdomas@gmail.lt',
    },
      {
        href: '/kontaktai',
        label: 'Kontaktai',
      },
      {
        href: 'https://www.facebook.com/profile.php?id=61577813265349&locale=lt_LT',
        label: <FaFacebook size="14" />,
      },

    ],
  },
  // signup: {
  //   title: 'Start building with Saas UI',
  //   features: [
  //     {
  //       icon: FiCheck,
  //       title: 'Accessible',
  //       description: 'All components strictly follow WAI-ARIA standards.',
  //     },
  //     {
  //       icon: FiCheck,
  //       title: 'Themable',
  //       description:
  //         'Fully customize all components to your brand with theme support and style props.',
  //     },
  //     {
  //       icon: FiCheck,
  //       title: 'Composable',
  //       description:
  //         'Compose components to fit your needs and mix them together to create new ones.',
  //     },
  //     {
  //       icon: FiCheck,
  //       title: 'Productive',
  //       description:
  //         'Designed to reduce boilerplate and fully typed, build your product at speed.',
  //     },
  //   ],
  // },
}

export default siteConfig

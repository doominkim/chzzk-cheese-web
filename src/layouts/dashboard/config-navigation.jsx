import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: '대시보드',
  //   path: '/streamer-list',
  //   icon: <Iconify icon="mdi-exclamation" sx={{ width: '100%', height: '100%' }} />,
  // },
  {
    title: '채널',
    path: '/streamer-list',
    icon: <Iconify icon="mdi-contacts" sx={{ width: '100%', height: '100%' }} />,
  },
  // {
  //   title: '매크로',
  //   path: '/cheesebot',
  //   icon: <Iconify icon="mdi-exclamation" sx={{ width: '100%', height: '100%' }} />,
  // },
  // {
  //   title: '투표',
  //   path: '/cheesebot',
  //   icon: <Iconify icon="mdi-exclamation" sx={{ width: '100%', height: '100%' }} />,
  // },
  // {
  //   title: '미션',
  //   path: '/cheesebot',
  //   icon: <Iconify icon="mdi-exclamation" sx={{ width: '100%', height: '100%' }} />,
  // },
  // {
  //   title: '룰렛',
  //   path: '/cheesebot',
  //   icon: <Iconify icon="mdi-exclamation" sx={{ width: '100%', height: '100%' }} />,
  // },
  // {
  //   title: '스트리머 게시판',
  //   path: '/streamerBoard',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: '악질 유저 목록',
  //   path: '/streamerQuestion',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: '회장님 목록',
  //   path: '/streamerQuestion',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'dashboard',
  //   path: '/',
  //   icon: icon('ic_analytics'),
  // },
  // {
  //   title: 'user',
  //   path: '/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;

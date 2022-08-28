import Home from '@/pages/Home/Home.js';
import Following from '@/pages/Following/Following.js';
import Profile from '@/pages/Profile/Profile.js';
import Upload from '@/pages/Upload/Upload.js';
import Search from '@/pages/Search/Search.js';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: null },
    { path: '/Search', component: Search, layout: null },
]; // ko đăng nhập vẫn xem đươck

const privateRoutes = []; // phải đăng nhập

export { publicRoutes, privateRoutes };

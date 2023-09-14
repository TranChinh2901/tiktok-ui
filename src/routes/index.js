//import layout
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Dùng cho các routes không đăng nhập mà vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Dùng cho các routes phải đăng nhập mới xem được. Còn nếu không đăng nhập thì sẽ chuyển sang trang Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

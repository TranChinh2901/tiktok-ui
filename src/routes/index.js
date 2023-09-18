import config from '~/config';

//import layout
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Dùng cho các routes không đăng nhập mà vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Dùng cho các routes phải đăng nhập mới xem được. Còn nếu không đăng nhập thì sẽ chuyển sang trang Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

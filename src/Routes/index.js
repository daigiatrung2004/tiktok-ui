import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/component/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, Layout: HeaderOnly }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

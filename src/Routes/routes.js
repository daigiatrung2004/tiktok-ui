import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import configs from '~/configs';
import { HeaderOnly } from '~/Layouts';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload, Layout: HeaderOnly }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { default as routesConfig } from '~/configs/routes';
import { HeaderOnly } from '~/component/Layouts';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, Layout: HeaderOnly }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

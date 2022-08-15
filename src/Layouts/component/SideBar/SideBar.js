import MenuItems from './MenuItems';

import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import configs from '~/configs';
import {
    HomeIcon,
    HomeAcitveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    LiveIcon,
    LiveAcitveIcon
} from '~/component/Icons';
import Menu from './Menu';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="Dành Cho Bạn"
                    to={configs.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeAcitveIcon />}
                />
                <MenuItems
                    title="Đang Follow"
                    to={configs.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItems title="LIVE" to={configs.routes.live} icon={<LiveIcon />} activeIcon={<LiveAcitveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;

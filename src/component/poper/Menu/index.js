import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/component/poper';
import classNames from 'classnames/bind';
import style from './menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const menuItems = () => {
        return items.map((item, index) => <MenuItems data={item} key={index} />);
    };

    return (
        <Tippy
            delay={[0, 700]}
            placement={'bottom-end'}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-items')}>{menuItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

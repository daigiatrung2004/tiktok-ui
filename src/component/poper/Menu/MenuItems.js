import classNames from 'classnames/bind';
import style from './menu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItems({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItems;

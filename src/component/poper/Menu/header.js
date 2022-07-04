import classNames from 'classnames/bind';
import style from './menu.module.scss';

const cx = classNames.bind(style);

function Header({ icon, title, onBack }) {
    return (
        <div className={cx('header')}>
            <span className={cx('icon')} onClick={onBack}>
                {icon}
            </span>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default Header;

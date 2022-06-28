import classNames from 'classnames/bind';
import style from './poper.module.scss';

const cx = classNames.bind(style);

function Wrappper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrappper;

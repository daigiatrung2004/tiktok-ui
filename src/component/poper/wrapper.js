import classNames from 'classnames/bind';
import style from './poper.module.scss';

const cx = classNames.bind(style);

function Wrappper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrappper;

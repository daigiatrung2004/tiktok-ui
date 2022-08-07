import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './poper.module.scss';

const cx = classNames.bind(style);

function Wrappper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrappper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Wrappper;

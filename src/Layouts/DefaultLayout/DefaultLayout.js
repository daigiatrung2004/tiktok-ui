import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import Header from '~/Layouts/component/Header';
import styles from './defaultlayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;

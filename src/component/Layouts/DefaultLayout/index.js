import classNames from 'classnames/bind';
import SideBar from './SideBar';
import Header from '~/component/Layouts/component/Header';
import styles from './defaultlayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <SideBar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

import { faCheckCircle, faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/poper';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [searchAccounts, setSearchAccounts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchAccounts([1, 2, 3]);
        }, 1000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <Tippy
                    visible={searchAccounts.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('accountTitle')}>Tài khoản</div>
                                {searchAccounts.map((data, index) => {
                                    return (
                                        <div className={cx('accountItem')} key={index}>
                                            <img
                                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a0ee4b1e1cbdbb1f0c2645ee8bb75e40~c5_300x300.webp?x-expires=1655726400&x-signature=L42uHKSaHBj1KB8i3azupxcUS4I%3D"
                                                alt="account"
                                                className={cx('avatar')}
                                            />
                                            <div className={cx('info')}>
                                                <h4 className={cx('name')}>
                                                    <span>Nguyễn Văn A</span>
                                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                                </h4>
                                                <p className={cx('account')}>ngvaaaa</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                            className="input-search"
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className="action"></div>
            </div>
        </div>
    );
}
export default Header;

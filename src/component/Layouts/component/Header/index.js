import { useEffect, useState } from 'react';
import {
    faCheckCircle,
    faCircleNotch,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { images } from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/poper';
import Button from '~/component/Button';
import Menu from '~/component/poper/Menu';

import { types, sizes } from '~/util/constant';

const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/Following'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phim tắt trên bàn phím'
    }
];

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
                        <button className={cx('btn-search')} disabled>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button
                        type={types.buttonType.d}
                        sizeStyle={sizes.m}
                        leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                    >
                        Tải lên
                    </Button>
                    <Button primary sizeStyle={sizes.m} onClick={() => alert('xin chao')}>
                        Đăng nhập
                    </Button>
                    <Menu className={cx('menu-list')} items={MENU_LIST}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default Header;

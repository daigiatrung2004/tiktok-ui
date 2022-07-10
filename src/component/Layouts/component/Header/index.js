import {
    faArrowRightFromBracket,
    faCheckCircle,
    faCircleNotch,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import TippyHeadLess from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import Button from '~/component/Button';
import { Wrapper as PopperWrapper } from '~/component/poper';
import Menu from '~/component/poper/Menu';
import styles from './header.module.scss';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { sizes } from '~/util/constant';
import { MessageIcon } from '~/component/icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    title: 'Tiếng Việt'
                },
                {
                    title: 'Tiếng Anh'
                }
            ]
        }
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

    const changeHandle = (menuItem) => {
        console.log(menuItem);
    };

    const user = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchAccounts([1, 2, 3]);
        }, 1000);
    }, []);

    const USER_LIST = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings'
        },
        ...MENU_LIST,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            seperate: true
        }
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <TippyHeadLess
                    // visible={searchAccounts.length > 0}
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
                </TippyHeadLess>
                <div className={cx('action')}>
                    {user ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('btn-icons')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                sizeStyle={sizes.m}
                                leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                            >
                                Tải lên
                            </Button>
                            <Button primary sizeStyle={sizes.m} onClick={() => alert('xin chao')}>
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <Menu className={cx('menu-list')} items={user ? USER_LIST : MENU_LIST} onChange={changeHandle}>
                        {user ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1665504715984898.jpeg?x-expires=1657022400&x-signature=kC7IIa2gJG7ErOFurDA6HRDtUUs%3D"
                                alt="Nguyễn Văn A"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}
export default Header;

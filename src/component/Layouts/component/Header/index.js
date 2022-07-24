import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { images } from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/poper/Menu';
import styles from './header.module.scss';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { sizes } from '~/util/constant';
import { InboxIcon, MessageIcon } from '~/component/icons';
import Search from '~/component/Layouts/component/Search';
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
    const changeHandle = (menuItem) => {
        console.log(menuItem);
    };

    const user = true;

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
                <Search />
                <div className={cx('action')}>
                    {user ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('btn-icons')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                <button className={cx('btn-icons')}>
                                    <InboxIcon />
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

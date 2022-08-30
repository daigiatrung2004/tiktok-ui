import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Image from '~/component/Image';
import { Wrapper as PopperWrapper } from '~/component/poper';
import styles from './suggestedaccounts.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function SuggestedAccountItem({ isSuggested = false, attrs }) {
    return (
        <div>
            <Tippy
                delay={[500, 0]}
                offset={[-20, 4]}
                placement={'bottom'}
                interactive
                render={() => {
                    return (
                        <div className={cx('preview')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('priview-wrapper')}>
                                <div className="preview-info">
                                    <div className={cx('header')}>
                                        <Image
                                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661918400&x-signature=LPYM0tD6mZtLF%2FelnxSoAcVzTLY%3D"
                                            alt="theanh28entertainment"
                                            className={cx('preview-image')}
                                        />
                                        <Button className={cx('btn-follow')} primary>
                                            Follow
                                        </Button>
                                    </div>
                                    <div className={cx('body')}>
                                        <p className={cx('nickname')}>
                                            <strong>theanh28entertainment</strong>
                                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                                        </p>

                                        <p className={cx('name')}>Theanh28 Entertainment</p>
                                    </div>
                                    <div className="analyze">
                                        <span className={cx('footer')}>
                                            <strong className={cx('count')}>7M</strong>
                                            Follower
                                        </span>
                                        <span className={cx('footer')}>
                                            <strong className={cx('count')}>456.1M</strong>
                                            Thích
                                        </span>
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                <div className={cx('item')}>
                    <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661918400&x-signature=LPYM0tD6mZtLF%2FelnxSoAcVzTLY%3D"
                        className={cx('avatar')}
                    />
                    <div className={cx('info')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                        </p>

                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {
    isSuggested: PropTypes.bool
};

export default SuggestedAccountItem;

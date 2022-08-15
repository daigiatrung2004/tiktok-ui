import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/poper';
import classNames from 'classnames/bind';

import style from './menu.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const menuItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // reset go to first page
    const handleReset = () => setHistory((prev) => prev.slice(0, 1));

    const handleBack = () => setHistory((prev) => prev.slice(0, prev.length - 1));

    const searchResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-items')}>
                {history.length > 1 && (
                    <Header icon={<FontAwesomeIcon icon={faChevronLeft} />} title={current.title} onBack={handleBack} />
                )}
                {menuItems()}
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            placement={'bottom-end'}
            hideOnClick={hideOnClick}
            interactive
            onHide={handleReset}
            render={searchResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
};

export default Menu;

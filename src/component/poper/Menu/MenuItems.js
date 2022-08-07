import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './menu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItems({ data, onClick }) {
    const classNames = cx('menu-item', data.seperate);

    return (
        <Button leftIcon={data.icon} to={data.to} className={classNames} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.propsType = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default MenuItems;

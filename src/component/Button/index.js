import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    type,
    primary = false,
    outline = false,
    rounded = false,
    sizeStyle,
    children,
    leftIcon,
    rightIcon,
    disabled = false,
    className,
    onClick,
    ...attrs
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...attrs
    };

    // remove event listener when button disabled
    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] == 'function') {
                delete props[propKey];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classNames = cx('wrapper', {
        [className]: className,
        primary,
        rounded,
        outline,
        [sizeStyle]: sizeStyle,
        disabled
    });

    return (
        <Comp className={classNames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './image.module.scss';
import { images } from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt || 'NO NAME'}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string
};

export default Image;

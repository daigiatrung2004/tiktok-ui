import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounced;
}

useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default useDebounce;

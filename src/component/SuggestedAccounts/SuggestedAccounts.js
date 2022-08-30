import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import SuggestedAccountItem from './SuggestedAccountItem';
import styles from './suggestedaccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, isSuggested = false }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>{label}</div>
            <div className="body">
                <SuggestedAccountItem isSuggested />
                <SuggestedAccountItem isSuggested />
                <SuggestedAccountItem isSuggested />
                <SuggestedAccountItem isSuggested />
                <SuggestedAccountItem isSuggested />

                <p className={cx('more')}>Xem tất cả</p>
            </div>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    isSuggested: PropTypes.bool
};

export default SuggestedAccounts;

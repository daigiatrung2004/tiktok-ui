import TippyHeadLess from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { forwardRef, useEffect, useState } from 'react';

import AccountItems from '~/component/AccountItems';
import { CloseIcon, LookupIcon } from '~/component/Icons';
import { Wrapper as PopperWrapper } from '~/component/poper';
import { useDebounce } from '~/hooks';
import styles from './search.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { search } from '~/services/searchService';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const Search = forwardRef((props, ref) => {
    const [searchAccounts, setSearchAccounts] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [queryParam, setQueryParam] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounce = useDebounce(queryParam, 400);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchAccounts([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            try {
                const result = await search(debounce);
                setLoading(false);
                setSearchAccounts(result);
            } catch {
                setLoading(false);
                setShowResult(false);
            }
        };

        fetchApi();
    }, [debounce]);

    const handleSearchInput = (e) => {
        let searchKeyWord = e.target.value;
        if (!searchKeyWord.startsWith(' ')) {
            setShowResult(true);
            setQueryParam(e.target.value);
        }
    };

    const clearHandle = () => {
        setSearchAccounts([]);
        setQueryParam('');
        inputRef.current.focus();
    };

    return (
        <div>
            <TippyHeadLess
                visible={showResult && searchAccounts.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('accountTitle')}>Tài khoản</div>
                            {searchAccounts.map((data) => (
                                <AccountItems data={data} key={data.id} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div ref={ref} className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        className="input-search"
                        value={queryParam}
                        onChange={handleSearchInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!queryParam && !loading && (
                        <button className={cx('clear')} onClick={clearHandle}>
                            <CloseIcon />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('btn-search')} disabled>
                        <LookupIcon />
                    </button>
                </div>
            </TippyHeadLess>
        </div>
    );
});

export default Search;

import { Wrapper as PopperWrapper } from '@/components/Popper/Popper.js';
import Tippy from '@tippyjs/react/headless';
import './Header.scss';
import axios from 'axios';
import TippyWrap from '@tippyjs/react';
import AccountItem from './AccountItem/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Debounce from '@/hooks/useDebounce';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

function HeaderSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isShowResult, setIsShowResult] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);

    const inputRef = useRef();

    const debounce = Debounce(searchValue, 800);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setSearchLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounce,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setSearchLoading(false);
            })
            .catch(() => setSearchLoading(false));
    }, [debounce]);
    const handleSearchResult = () => {
        setIsShowResult(false);
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div>
                <Tippy
                    interactive
                    visible={isShowResult && searchResult.length > 0}
                    onClickOutside={handleSearchResult}
                    render={(attrs) => (
                        <div
                            className="header_search_history"
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className="">Accounts</h4>
                                {searchResult.map((result) => (
                                    <AccountItem
                                        key={result.id}
                                        data={result}
                                    />
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="header_search">
                        <input
                            ref={inputRef}
                            value={searchValue}
                            className="header_search_input"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setIsShowResult(true)}
                        />
                        {!!searchValue && !searchLoading && (
                            <button
                                className="header_search_clear"
                                onClick={() => {
                                    setSearchValue('');
                                    inputRef.current.focus();
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}

                        {searchLoading && (
                            <div className="header_search_load">
                                <FontAwesomeIcon icon={faSpinner} />
                            </div>
                        )}
                        <TippyWrap content="Tìm kiếm">
                            <button
                                className="header_search_search"
                                onMouseDown={handlerSubmit}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </TippyWrap>
                    </div>
                </Tippy>
            </div>
        </>
    );
}

export default HeaderSearch;

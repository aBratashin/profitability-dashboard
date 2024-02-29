'use client';
import React, {FC, useState} from 'react';
import {SearchProps} from '@/features/Search/Search.props';
import ArrowRight from '/public/img/arrow-right.svg';
import {cvaArrow, cvaButton, cvaContainer, cvaInput} from '@/features/Search/SearchStyles';

const Search: FC<SearchProps> = ({...props}) => {
    const [inputText, setInputText] = useState('');

    return (
        <div className={cvaContainer()}>
            <input
                {...props}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className={cvaInput()}
            />
            {inputText && (
                <button
                    className={cvaButton()}>
                    <ArrowRight className={cvaArrow()}/>
                </button>
            )}
        </div>
    );
};

export default Search;

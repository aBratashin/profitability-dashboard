'use client';
import React, { FC, useState } from 'react';
import { SearchProps } from '@/components/search/Search.props';
import ArrowRight from '/public/img/arrow-right.svg';

const Search: FC<SearchProps> = ({ ...props }) => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="relative">
      <input
        {...props}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-10 min-w-[400px] rounded-[32px] py-2 px-4 outline-none border-2 border-transparent focus:border-2 focus:border-solid focus:border-black focus:border-opacity-35"
      />
      {inputText && (
        <button
          className="absolute top-1.5 right-2 bg-[#898989] w-8 h-8 text-black rounded-full flex items-center justify-center">
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Search;

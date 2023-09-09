'use client';

import React, { FormEvent, useState } from 'react';
import styles from './SearchValue.module.scss';
import clsx from 'clsx';
import { SearchIcon } from '@/icons';
type SearchInputProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
  enterButtonContent?: string | React.ReactNode;
  width?: number;
};

const SearchInput = ({
  placeholder,
  onSearch,
  className,
  enterButtonContent,
  width
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch && onSearch(searchValue);
  };

  return (
    <div style={{width: width || 'auto'}} className={clsx(className)}>
      <form onSubmit={handleSearch}>
        <div className={clsx(styles.boxSearch, 'h-[40px]')}>
          <input
            className={clsx(styles.inputSearch, 'pl-2 pr-16')}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={placeholder || 'input search text'}
          />
          <button className={clsx(styles.searchButton)} type="submit">
            {enterButtonContent ? enterButtonContent : <SearchIcon />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

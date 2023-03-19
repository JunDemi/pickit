import { useEffect, useState } from 'react';
import '../../assets/styles/SearchAutoComplete.scss';
import { ReactComponent as SearchImage } from '../../assets/images/reading-glasses.svg';

type Size = 'small' | 'medium' | 'large';

interface Props {
  data?: {
    label: string;
    value: string;
  }[];
  size: Size;
}

const MOCK_DATA = [
  { label: 'test1', value: 'test' },
  { label: 'test2', value: 'test2' },
  { label: 'test3', value: 'test3' },
  { label: 'test4', value: 'test4' },
];

export default function SearchAutoComplete({
  data = MOCK_DATA,
  size = 'large',
}: Props) {
  const [searching, setSearching] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
    setInputValue(value);
  };

  const clearInput: () => void = () => {
    setInputValue('');
  };

  const searchInput: () => void = () => {
    alert('검색');
  };

  useEffect(() => {
    inputValue ? setSearching(true) : setSearching(false);
  }, [inputValue]);

  return (
    <div className={`search-container ${size}`}>
      <div
        className={`search-content-wrapper ${
          searching ? 'active' : 'inactive'
        }`}
      >
        <div className="search-input-wrapper">
          <input
            className={`search-input-autocomplete ${size}`}
            onChange={onChangeInput}
            value={inputValue}
          />
        </div>
        <button className="search-btn-search" onClick={searchInput}>
          <SearchImage />
        </button>
      </div>
      {searching && (
        <ul className={`search-ul-dropdown ${size}`}>
          <>
            {data.length === 0 && <li key="searching">검색중...</li>}
            {data.length > 0 &&
              data.map((item, index) => (
                <li
                  key={index}
                  className={`${index === 0 && 'selected'}`}
                  value={item.value}
                >
                  {item.label}
                </li>
              ))}
          </>
        </ul>
      )}
    </div>
  );
}

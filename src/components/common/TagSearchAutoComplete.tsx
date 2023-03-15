import { createElement } from 'react';
import { useEffect, useState } from 'react';
import '../../assets/styles/TagSearchAutoComplete.scss';
import { ReactComponent as SearchImage } from '../../assets/images/reading-glasses.svg'

type Size = 'small' | 'medium' | 'large';

interface Props {
    data?: {
        label: string,
        value: string
    }[]
    size: Size
}

const MOCK_DATA = [
    // { label: 'test1', value: 'test' },
    // { label: 'test2', value: 'test2' },
    // { label: 'test3', value: 'test3' },
    // { label: 'test4', value: 'test4' },
] as any[]

export default function TagSearchAutoComplete({ size = 'large' }: Props) {

    //TODO 드롭다운 리스트 ajax 요청

    const [searching, setSearching] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [tags, setTags] = useState<Array<string>>([]);
    const [indexDropdownItem, setIndexDropdownItem] = useState<number>(0);

    useEffect(() => {
        // 인풋값 존재시 서칭 true
        inputValue ? setSearching(true) : setSearching(false);
        // 인풋값 없을시 드롭다운 리스트 인덱스 0번 고정
        !inputValue && setIndexDropdownItem(0);
    }, [inputValue])

    const onChangeInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
        setInputValue(value);
    }

    const clearInput: () => void = () => {
        // 태그, 인풋, 드롭다운리스트인덱스 초기화
        setTags([]);
        setInputValue('');
        setIndexDropdownItem(0);
    }

    const searchInput: () => void = () => {
        alert('검색');
    }

    const makeTag: (label: string) => void = (label) => {
        // 태그 추가시 input value에 # 포함시 원본 그대로 추가. #가 포함되어있지않으면 #을 붙인 수정본을 추가.
        setTags(prev => Array.from(new Set([...prev, label.charAt(0) === '#' ? label : '#' + label])))
        setInputValue('');
        setIndexDropdownItem(0);
    }

    const removeTag: ({ currentTarget: { innerText } }: React.MouseEvent<HTMLElement>) => void = ({ currentTarget: { innerText } }) => {
        setTags(prev => prev.filter(v => {
            if(innerText[innerText.length - 1] === 'x'){
                return v !== innerText.slice(0, -1)
            }else{
                return v !== innerText
            }
        }))
    }

    const mouseIn = (e: React.MouseEvent<HTMLElement>) => {
        if (!document.getElementById('removeBtn')) {
            const buttonEl = document.createElement('div');
            buttonEl.id = 'removeBtn';
            buttonEl.style.display = 'inline-block';
            buttonEl.style.marginLeft = '3px';
            const text = document.createTextNode('x');
            buttonEl.appendChild(text);

            e.currentTarget.appendChild(buttonEl);
        }
    }

    const mouseOut: () => void = () => {
        const buttonNodes = document.querySelectorAll('div[id=removeBtn]');
        buttonNodes.forEach(node => node.remove());
    }

    const onKeyDownInput: ({ key }: React.KeyboardEvent<HTMLInputElement>) => void = ({ key }) => {
        switch (key) {
            case 'Enter':
                // 드롭다운 리스트 존재: 드롭다운의 아이템을 태그로 추가하고
                // 드롭다운 리스트 X: input value를 태그로 추가함
                if (inputValue) {
                    if (MOCK_DATA.length > 0) {
                        makeTag(MOCK_DATA[indexDropdownItem].label);
                    } else {
                        makeTag(inputValue);
                    }
                }
                break;
            case 'Backspace':
                /**
                 * 1. input value가 없음
                 * 2. 태그가 1개 이상 있음
                 * 위 두 개의 조건을 만족하면, 태그만 지움. 
                 * 두 개 모두 만족하지 못하면, input value만 지움.
                 */
                if (!inputValue && tags.length > 0) {
                    setTags(tags => {
                        const tagsArr = [...tags];
                        tagsArr.pop();
                        return [...tagsArr];
                    });
                }
                break;
            case 'ArrowUp':
                indexDropdownItem > 0 && setIndexDropdownItem(index => --index);
                break;
            case 'ArrowDown':
                MOCK_DATA.length > indexDropdownItem + 1 && setIndexDropdownItem(index => ++index);
                break;
            default:
                break;
        }
    }

    return (
        <div className={`tag-search-container ${size}`}>
            <div className={`tag-search-content-wrapper ${searching ? 'active' : 'inactive'} ${size}`}>
                <>
                    <div className='tag-search-input-wrapper'>
                        {tags.length > 0 && tags.map((tag, index) => (
                            <span className='tag' key={`tag${index}`} onClick={removeTag} onMouseMove={mouseIn} onMouseLeave={mouseOut}>{tag}</span>
                        ))}
                        <input className='tag-search-input-autocomplete' onChange={onChangeInput} value={inputValue} onKeyDown={onKeyDownInput} />
                    </div>
                </>
                <button className='tag-search-btn-search' onClick={searchInput}><SearchImage /></button>
            </div>
            {searching && (
                <ul className={`tag-search-ul-dropdown ${size}`}>
                    <>
                        {MOCK_DATA.length === 0 && <li key='searching'>검색중...</li>}
                        {MOCK_DATA.length > 0 && MOCK_DATA.map((item, index) => (
                            <li key={index} className={`${indexDropdownItem === index ? 'selected' : ''}`} value={item.value}>
                                {item.label}
                            </li>
                        ))}
                    </>
                </ul>
            )}
        </div>
    )
}
import { useEffect, useState } from 'react';
import '../../assets/TagSearchAutoComplete.scss';


type Size = 'small' | 'medium' | 'large';

interface Props {
    data?: {
        label: string,
        value: string
    }[]
    size: Size
}

const MOCK_DATA = [
    { label: "test1", value: "test" },
    { label: "test2", value: "test2" },
    { label: "test3", value: "test3" },
    { label: "test4", value: "test4" },
]

export default function TagSearchAutoComplete({ data = MOCK_DATA, size = 'large' }: Props) {

    const [searching, setSearching] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [tags, setTags] = useState<Array<string>>([]);

    const onChangeInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
        setInputValue(value);
    }

    const clearInput = () => {
        setTags([]);
        setInputValue('');
    }

    const onKeyDownInput: ({ key }: React.KeyboardEvent<HTMLInputElement>) => void = ({ key }) => {
        switch (key) {
            case 'Enter':
                if (inputValue) {
                    setTags(prev => {
                        return [
                            ...prev, inputValue.includes('#') ? inputValue : '#' + inputValue
                        ]
                    })
                    setInputValue('');
                }
                break;
            case 'Backspace':
                if (tags.length > 0) {
                    setTags(tags => {
                        const tagsArr = [...tags];
                        tagsArr.pop();
                        return [...tagsArr];
                    });
                }
                break;
            default:
                break;
        }

    }

    // 인풋값 존재시 서칭 true
    useEffect(() => {
        inputValue ? setSearching(true) : setSearching(false);
    }, [inputValue])

    // 중복 태그 제거
    useEffect(() => {
        setTags([...new Set(tags)])
    }, [tags])

    return (
        <div className={`container ${size}`}>
            <div className={`input-wrapper ${searching ? 'active' : 'inactive'} ${size}`}>
                <>
                    <div style={{ display: "flex", flexWrap: "wrap", width: "100%", overflow: "hidden" }}>
                        {tags.length > 0 && tags.map((tag, index) => (
                            <span className='tag' key={`tag${index}`}>{tag}</span>
                        ))}
                        <input className={`input-autocomplete`} onChange={onChangeInput} value={inputValue} onKeyDown={onKeyDownInput} />
                        <button className='btn-clear' onClick={clearInput}>x</button>
                    </div>
                </>
            </div>
            {searching && (
                <ul className={`ul-dropdown ${size}`}>
                    <>
                        {data.length > 0 && data.map((item, index) => (
                            <li key={index} className={`${index === 0 && 'selected'}`} value={item.value}>
                                {item.label}
                            </li>
                        ))}
                    </>
                </ul>
            )}
        </div>
    )
}
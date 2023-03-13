import { useEffect, useState } from 'react';
import '../../assets/SearchAutoComplete.scss';


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

export default function SearchAutoComplete({ data = MOCK_DATA, size = 'large' }: Props) {

    const [searching, setSearching] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeInput: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
        setInputValue(value);
    }

    const clearInput = () => {
        setInputValue('');
    }

    useEffect(() => {
        if (inputValue) {
            setSearching(true);
        } else {
            setSearching(false);
        }
    }, [inputValue])

    return (
        <div className={`container ${size}`}>
            <div className={`input-wrapper ${searching ? 'active' : 'inactive'}`}>
                <input className={`input-autocomplete ${size}`} onChange={onChangeInput} value={inputValue} />
                <button className='btn-clear' onClick={clearInput}>x</button>
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
import MarkIcon from '../../assets/MarkIcon'
import './radio-button.css'

interface Props {
    id: string;
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RadioButton({ id, isChecked, onChange }: Props) {
    return (
        <div className="custom-radio">
            <div>
                <input className='radio-input' type="checkbox" id={id} checked={isChecked} onChange={onChange} />
                <label className='radio-label' htmlFor={id}>
                    <span className='radio-span'>
                        <MarkIcon size={12} color="white" />
                    </span>
                </label>
            </div>
        </div>
    )
}

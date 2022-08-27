import { Group, Input, Label } from './form-input.styles.jsx';

const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input {...inputOptions} />
            {label && (
                <Label className={`${inputOptions.value.length ? 'shrink' : ''}`}>{label}</Label>
            )}
        </Group>
    )
}

export default FormInput;
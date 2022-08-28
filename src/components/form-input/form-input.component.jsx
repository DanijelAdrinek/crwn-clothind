import { Group, Input, Label } from './form-input.styles.jsx';

const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input {...inputOptions} />
            {label && (
                <Label shrink={inputOptions.value.length}>{label}</Label>
            )}
        </Group>
    )
}

export default FormInput;
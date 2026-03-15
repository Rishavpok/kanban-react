import type { UseFormRegister, RegisterOptions, FieldValues, Path } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
    type: string
    placeholder: string
    formName: UseFormRegister<T>
    control: Path<T>
    rules?: RegisterOptions
}

export default function Input<T extends FieldValues>({
    type,
    placeholder,
    formName,
    control,
    rules
}: InputProps<T>) {
    return <input {...formName(control, rules)} type={type} placeholder={placeholder} />
}
import type { UseFormRegister, RegisterOptions, FieldValues, Path } from 'react-hook-form'

export type SelectOption = {
    label: string
    value: string
}

type SelectProps<T extends FieldValues> = {
    formName: UseFormRegister<T>
    control: Path<T>
    options: SelectOption[]
    rules?: RegisterOptions
    placeholder?: string   // e.g "Select a status..."
}

export default function Select<T extends FieldValues>({
    formName,
    control,
    options,
    rules,
    placeholder
}: SelectProps<T>) {
    return (
        <select {...formName(control, rules)}>
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup } from '@/components/ui/radioGroup'
import { TypographyProps } from '@/components/ui/typography'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

export type CustomRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  RadioGroupProps &
  Omit<TypographyProps<'p'>, 'as' | 'children' | 'className'>

export const ControlledRadio = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: CustomRadioGroupProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return <RadioGroup {...rest} disabled={disabled} onChange={onChange} ref={ref} value={value} />
}

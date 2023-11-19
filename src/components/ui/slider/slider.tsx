import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'
//
export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  ComponentPropsWithoutRef<typeof SliderRadix.Root> & {
    maxValue: number
    updateValues: (values: number[]) => void
    values: number[]
  }
>(({ maxValue, updateValues, values, ...rest }, ref) => {
  const onValueChangeHandler = (numbers: number[]) => {
    updateValues(numbers)
  }

  return (
    <form className={s.SliderStyle}>
      <Typography variant={'body1'}>
        <span className={s.SliderNumbers}>{values[0]}</span>
      </Typography>
      <SliderRadix.Root
        className={s.SliderRoot}
        max={maxValue}
        onValueChange={onValueChangeHandler}
        ref={ref}
        step={1}
        value={values}
        {...rest}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>

        <SliderRadix.Thumb aria-label={'Volume1'} className={s.SliderThumb} />

        <SliderRadix.Thumb aria-label={'Volume2'} className={s.SliderThumb} />
      </SliderRadix.Root>
      <Typography variant={'body1'}>
        <span className={s.SliderNumbers}>{values[1]}</span>
      </Typography>
    </form>
  )
})

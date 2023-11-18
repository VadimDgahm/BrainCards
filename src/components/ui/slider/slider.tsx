import React, { ChangeEvent } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

const SliderDemo = () => (
  <form className={s.SliderStyle}>
    <Typography variant={'body1'}>
      <span className={s.SliderNumbers}>2</span>
    </Typography>
    <Slider.Root className={s.SliderRoot} defaultValue={[0, 100]} step={1}>
      <Slider.Track className={s.SliderTrack}>
        <Slider.Range className={s.SliderRange} />
      </Slider.Track>

      <Slider.Thumb aria-label={'Volume1'} className={s.SliderThumb} />

      <Slider.Thumb aria-label={'Volume2'} className={s.SliderThumb} />
    </Slider.Root>
    <Typography variant={'body1'}>
      <span className={s.SliderNumbers}>10</span>
    </Typography>
  </form>
)

export default SliderDemo

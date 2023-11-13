import { ComponentPropsWithoutRef } from 'react'

export type IconProps = {
  version?: ThemeApp
  color?: string
} & ComponentPropsWithoutRef<'svg'>
export type ThemeApp = 'dark' | 'light' | 'red'

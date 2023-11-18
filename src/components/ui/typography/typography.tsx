import { ReactNode } from 'react'

import s from './typography.module.scss'

import IntrinsicElements = JSX.IntrinsicElements

export type TypographyProps<T extends ComponentCollectionTagVariants = 'body1'> = {
  as?: T
  brightTheme?: boolean
  children: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}

export const Typography = <T extends ComponentCollectionTagVariants = 'body1'>(
  props: TypographyProps<T>
) => {
  const { as: Component = 'p', brightTheme, className, variant = 'body1', ...rest } = props

  const ComponentElement = ComponentCollection[variant] as keyof IntrinsicElements

  return (
    <ComponentElement
      className={`${s[variant]} 
      ${brightTheme ? s.brightTheme : ''} 
      ${className}`}
      {...rest}
    />
  )
}

const ComponentCollection = {
  body1: 'p',
  body2: 'p',
  caption: 'caption',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'p',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

export type ComponentCollectionTagVariants = keyof typeof ComponentCollection

import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import NotFoundPageSVG from '@/pages/404Page/notFoundPageSVG'

import s from './notFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={s.image}>
      <NotFoundPageSVG />
      <Typography className={s.title} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={Link} className={s.buttonBack} to={'/'}>
        Back to home page
      </Button>
    </div>
  )
}

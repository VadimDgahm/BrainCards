import { ChangeEvent, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ImageOutline } from '@/components/ui/icons/image-outline/ImageOutline'
import { Typography } from '@/components/ui/typography'

import s from './FormWithImg.module.scss'

type FormWithImgProps = {
  getImgAnswer: (img: File) => void
  getImgQuestion: (img: File) => void
}
export const FormWithImg = ({ getImgAnswer, getImgQuestion }: FormWithImgProps) => {
  const getImgFileQuestion = (imgFile: File) => {
    getImgQuestion(imgFile)
  }
  const getImgFileAnswer = (imgFile: File) => {
    getImgAnswer(imgFile)
  }

  return (
    <div>
      <ImageForm onChange={getImgFileQuestion} title={'Question'} />
      <ImageForm onChange={getImgFileAnswer} title={'Answer'} />
    </div>
  )
}

type ImageFormProps = {
  onChange: (fileImg: File) => void
  title: string
}

const ImageForm = ({ onChange, title }: ImageFormProps) => {
  const [img, setImg] = useState('https://placehold.co/484x119')
  const fileRef = useRef<HTMLInputElement>(null)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImg(URL.createObjectURL(event.target.files[0]))
      onChange(event.target.files[0])
    }
  }

  return (
    <div className={s.imageFormBox}>
      <Typography variant={'body1'}>{title}:</Typography>
      <div>
        <img className={s.image} src={img} />
      </div>
      <label htmlFor={'img'}>
        <input
          accept={'image/*,'}
          className={s.avatarEditor}
          id={title}
          onChange={onChangeHandler}
          ref={fileRef}
          type={'file'}
        />{' '}
        <Button onClick={() => fileRef.current?.click()} type={'button'} variant={'secondary'}>
          <ImageOutline className={s.icon} /> Change Cover
        </Button>
      </label>
    </div>
  )
}

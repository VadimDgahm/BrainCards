import { ChangeEvent, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ImageOutline } from '@/components/ui/icons/image-outline/ImageOutline'
import { Typography } from '@/components/ui/typography'

import s from './FormWithImg.module.scss'

type FormWithImgProps = {
  answerImg?: null | string
  getImgAnswer: (img: File) => void
  getImgQuestion: (img: File) => void
  questionImg?: null | string
}
export const FormWithImg = ({
  answerImg,
  getImgAnswer,
  getImgQuestion,
  questionImg,
}: FormWithImgProps) => {
  const getImgFileQuestion = (imgFile: File) => {
    getImgQuestion(imgFile)
  }
  const getImgFileAnswer = (imgFile: File) => {
    getImgAnswer(imgFile)
  }

  return (
    <div>
      <ImageForm img={questionImg} onChange={getImgFileQuestion} title={'Question'} />
      <ImageForm img={answerImg} onChange={getImgFileAnswer} title={'Answer'} />
    </div>
  )
}

type ImageFormProps = {
  img?: null | string
  onChange: (fileImg: File) => void
  title: string
}

const ImageForm = ({ img, onChange, title }: ImageFormProps) => {
  const defaultImg = img ? img : 'https://placehold.co/484x119'
  const [image, setImage] = useState(defaultImg)
  const fileRef = useRef<HTMLInputElement>(null)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]))
      onChange(event.target.files[0])
    }
  }

  return (
    <div className={s.imageFormBox}>
      <Typography variant={'body1'}>{title}:</Typography>
      <div>
        <img className={s.image} src={image} />
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

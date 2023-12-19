import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type CardActionsType = {
  onSubmit: (body: FormData) => void
  setOpen: (isOpen: boolean) => void
}
export const useCardActions = ({ onSubmit, setOpen }: CardActionsType) => {
  const { control, handleSubmit, reset } = useForm<FormDataAddCards>({
    defaultValues: {
      answer: '',
      question: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })
  const [variantCard, setVariantCard] = useState<string>('Text')
  const [answerImg, setAnswerImg] = useState<File>()
  const [questionImg, setQuestionImg] = useState<File>()
  const getImgAnswer = (imgFile: File) => {
    setAnswerImg(imgFile)
  }
  const getImgQuestion = (imgFile: File) => {
    setQuestionImg(imgFile)
  }
  const onSubmitHandler = async (dateForm: FormDataAddCards) => {
    const formData = new FormData()

    questionImg && formData.append('questionImg', questionImg)
    answerImg && formData.append('answerImg', answerImg)
    formData.append('answer', dateForm.answer)
    formData.append('question', dateForm.question)
    onSubmit(formData)

    toast.success('success')
    reset()
    setOpen(false)
  }
  const arrTypesForm = [
    { title: 'Text', value: 'Text' },
    { title: 'Picture', value: 'Picture' },
  ]

  return {
    arrTypesForm,
    control,
    getImgAnswer,
    getImgQuestion,
    handleSubmit,
    onSubmitHandler,
    setVariantCard,
    variantCard,
  }
}

///////////validation//////////////////
const loginSchema = z.object({
  answer: z
    .string()
    .min(3, 'Name has to be at least 3 characters long')
    .max(3000, 'Name should be less than' + ' 30 characters'),
  question: z
    .string()
    .min(3, 'Name has to be at least 3 characters long')
    .max(3000, 'Name should be less than' + ' 30 characters'),
})

////type////
export type FormDataAddCards = {
  answer: string
  question: string
}

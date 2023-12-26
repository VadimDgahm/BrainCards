import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useAddCardByDeckIdMutation } from '@/services/cards.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type TypeProps = {
  idDeck: string
  setOpen: (isOpen: boolean) => void
}
export const useChangeCard = ({ idDeck, setOpen }: TypeProps) => {
  const { control, handleSubmit, reset } = useForm<FormDataAddCards>({
    defaultValues: {
      answer: '',
      question: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })
  const [addCard] = useAddCardByDeckIdMutation()
  const [variantCard, setVariantCard] = useState<string>('Text')
  const [answerImg, setAnswerImg] = useState<File>()
  const [questionImg, setQuestionImg] = useState<File>()
  const getImgAnswer = (imgFile: File) => {
    setAnswerImg(imgFile)
  }
  const getImgQuestion = (imgFile: File) => {
    setQuestionImg(imgFile)
  }
  const onSubmit = async (dateForm: FormDataAddCards) => {
    const formData = new FormData()

    questionImg && formData.append('questionImg', questionImg)
    answerImg && formData.append('answerImg', answerImg)
    formData.append('answer', dateForm.answer)
    formData.append('question', dateForm.question)
    await addCard({ body: formData, id: idDeck })

    toast.success('success')
    reset()
    setOpen(false)
  }
  const arrTypesForm = ['Text', 'Picture']

  return {
    arrTypesForm,
    control,
    getImgAnswer,
    getImgQuestion,
    handleSubmit,
    onSubmit,
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

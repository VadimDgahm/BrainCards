import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowBackOutLine } from '@/components/ui/icons/arrow-back-outline/ArrowBackOutline'
import { Preloader } from '@/components/ui/preloader'
import { RadioWithRating } from '@/components/ui/radioWithRating'
import { Typography } from '@/components/ui/typography'
import {
  useCreateAndSaveRateMutation,
  useGetCardsForLearnQuery,
  useLazyGetCardsForLearnQuery,
} from '@/services/cards/cards.service'
import { useGetDecksByIDQuery } from '@/services/decks/decks.service'
import { RateSave } from '@/services/decks/decks.types'

import s from './LearnCards.module.scss'

export const LearnCards = () => {
  const params = useParams()
  const [showAnswer, setShowAnswer] = useState(true)
  const { data: learnData } = useGetCardsForLearnQuery({ id: params?.cardsId })

  const [saveRate] = useCreateAndSaveRateMutation()
  const { data, isLoading } = useGetDecksByIDQuery({ id: params?.cardsId })
  const [getNextCard] = useLazyGetCardsForLearnQuery()
  const navigate = useNavigate()
  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const handleSubmit = (data: { grade: string }) => {
    const rateSave: RateSave = {
      cardId: learnData?.id,
      grade: parseInt(data.grade),
      id: learnData?.deckId,
    }

    saveRate(rateSave)
      .unwrap()
      .then(() => getNextCard({ id: learnData?.deckId }))
    setShowAnswer(true)
  }

  return (
    <>
      <Typography
        className={s.linkBack}
        onClick={() => navigate(`/cards/${learnData?.deckId}`)}
        variant={'body2'}
      >
        <ArrowBackOutLine className={s.iconBack} />
        Back to {data?.name} cards
      </Typography>
      {!isLoading ? (
        <Card className={s.learnCard}>
          <Typography className={s.title} variant={'large'}>
            Learn {data?.name}
          </Typography>
          <Typography className={s.question} variant={'subtitle1'}>
            Question: {learnData?.question && <span>{learnData?.question}</span>}
            {learnData?.questionImg && (
              <img className={s.questionImg} src={learnData?.questionImg} />
            )}
            {learnData?.questionVideo && (
              <div className={s.questionVideo}>{learnData?.questionVideo}</div>
            )}
          </Typography>
          <Typography variant={'body2'}>
            Количество попыток ответов на вопрос: {learnData?.shots}
          </Typography>
          {showAnswer && (
            <Button className={s.showAnswer} onClick={handleShowAnswer}>
              Show Answer
            </Button>
          )}
          {!showAnswer && (
            <>
              <Typography className={s.answer} variant={'subtitle1'}>
                Answer: {learnData?.answer && <span>{learnData?.answer}</span>}
                {learnData?.answerImg && <img className={s.answerImg} src={learnData?.answerImg} />}
                {learnData?.answerVideo && (
                  <div className={s.answerVideo}>{learnData?.answerVideo}</div>
                )}
              </Typography>
              <RadioWithRating onSubmit={handleSubmit} />
            </>
          )}
        </Card>
      ) : (
        <div className={s.learnPreloader}>
          <Preloader />
        </div>
      )}
    </>
  )
}

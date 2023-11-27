import {FC, useState} from 'react'

import {BigRadioGroup, BigRadioProps} from '@/components/ui/radioGroup'
import { Slider } from '@/components/ui/slider/slider'
import {SubmitHandler, useForm} from "react-hook-form";
import {ControlledRadio} from "@/components/controlled/controlled-radio/controlledRadio";
import {Button} from "@/components/ui/button";

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <div></div>
      <Slider maxValue={30} updateValues={sliderCallback} values={values} />



        export const BigRadioGroup: FC<BigRadioProps> = ({ onSubmit, variant }) => {
        const { control, handleSubmit } = useForm<{ radioButton: string }>()

        const handleFormSubmit: SubmitHandler<{ radioButton: string }> = data => {
        onSubmit([data.radioButton])
        console.log([data.radioButton])
    }

        const values = ['Did not know', 'Forgot', 'A lot of though', 'Confused', 'Knew the answer']

        return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
        {values.map((_, index) => (
            <ControlledRadio
                control={control}
                key={index}
                name={'radioButton'}
                value={values[index]}
                variant={variant}
            />
        ))}
        <Button
            // as = {Link}
            type={'submit'}
        >
            Next Question
        </Button>
    </form>
        )
        }
    </>
  )
}

export default App

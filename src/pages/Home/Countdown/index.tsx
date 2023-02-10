import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '..'
import { CountdownContainer, Separetor } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesAmountString = minutesAmount.toString().padStart(2, '0')
  const secondsAmountString = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const currentSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startAt,
        )

        if (currentSeconds >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(currentSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesAmountString}:${secondsAmountString} - Pomodoro`
    }
  }, [activeCycle, minutesAmountString, secondsAmountString])

  return (
    <CountdownContainer>
      <span>{minutesAmountString[0]}</span>
      <span>{minutesAmountString[1]}</span>
      <Separetor>:</Separetor>
      <span>{secondsAmountString[0]}</span>
      <span>{secondsAmountString[1]}</span>
    </CountdownContainer>
  )
}

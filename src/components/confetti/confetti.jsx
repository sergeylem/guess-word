import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default () => {
  useWindowSize();
  return (
    <Confetti
      width={'1000'}
      height={'1000'}
      numberOfPieces={'100'}
    />
  )
}

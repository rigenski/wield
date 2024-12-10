import { generateRandomText } from '@/utils/randomizeText'
import React from 'react'

const Page = () => {
  return (
    <div>{generateRandomText()}</div>
  )
}

export default Page
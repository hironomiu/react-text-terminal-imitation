import React from 'react'
import Response from './Response'

const PastLine = ({ value }) => {
  return (
    <>
      <span>{value}</span>
      <Response value={value} />
    </>
  )
}

export default PastLine

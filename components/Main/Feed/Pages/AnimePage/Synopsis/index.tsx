import React from 'react'
import { SynopsisRow } from './style'

interface Props {
  synopsis: string
}

export const Synopsis: React.FC<Props> = ({ synopsis }) => {
  return (
    <SynopsisRow>
      {synopsis}
    </SynopsisRow>
  )
}

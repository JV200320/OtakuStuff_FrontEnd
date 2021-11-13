import React from 'react'
import { SynopsisRow } from './style'

interface IProps {
  synopsis: string
}

export const Synopsis: React.FC<IProps> = ({ synopsis }) => {
  return (
    <SynopsisRow>
      {synopsis}
    </SynopsisRow>
  )
}

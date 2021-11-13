import React from 'react'
import { CustomButton } from './styles'

interface IProps {
  text: string,
  onClick: () => void,
  width?: string,
}

export const CustomEditButton: React.FC<IProps> = ({ text, onClick, width }) => {
  return (
    <CustomButton width={width ?? '25%'} onClick={() => onClick()}>
      {text}
    </CustomButton>
  )
}

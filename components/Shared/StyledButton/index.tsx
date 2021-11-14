import React from 'react'
import { CustomButton } from './styles'

interface IProps {
  text: string | JSX.Element,
  onClick: () => void,
  width?: string,
  backgroundColor?: string,
  color?: string,
  borderColor?: string,
  hoverTextColor?: string,
  outlined?: boolean,
  margin?: string,
}

export const StyledButton: React.FC<IProps> = ({ hoverTextColor, text, onClick, width, backgroundColor, borderColor, color, margin, outlined }) => {
  return (
    <CustomButton
      width={width ?? '25%'}
      onClick={() => onClick()}
      outlined={outlined}
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      margin={margin}
      hoverTextColor={hoverTextColor}
    >
      {text}
    </CustomButton>
  )
}

import React from 'react'
import { HoverableImage, ImageDiv, TextDiv } from './styles'

interface IProps {
  image: string,
  imageToShow: string,
  fileField: React.MutableRefObject<any>,
}

export const UserImage: React.FC<IProps> = ({ image, imageToShow, fileField }) => {
  return (
    <ImageDiv>
      <HoverableImage src={imageToShow} onClick={() => fileField.current.click()} />
      <TextDiv>
        {image ? null : <h1>Mudar Avatar</h1>}
      </TextDiv>
    </ImageDiv>
  )
}

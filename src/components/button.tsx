import React from 'react'

type ButtonProps = {
    title: string,
    color?: string,
    onClick: () => void
}

const Button:React.FC<ButtonProps> = ({title, color, onClick}) => {
  return (
    <button onClick={onClick} style={{color: color}}>{title}</button>
  )
}

export default Button
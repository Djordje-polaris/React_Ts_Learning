import React, { ReactNode } from 'react'

type LinkProps = {
children?: ReactNode;
color?: string;
}

const Link:React.FC<LinkProps> = ({children,color}) => {
  return (
    <a style={{color:color}}>{children}</a>
  )
}

export default Link
import React from 'react'
import ReactDOM from 'react-dom'

type IProps = {
  children?: React.ReactNode
  className?: string
  element?: string
}

export const Portal = ({ children, className = 'root-portal', element = 'div' }: IProps) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element)
    el.classList.add(className)
    return el
  })

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}

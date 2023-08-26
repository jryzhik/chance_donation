import React, { useEffect } from 'react'

export default function ButtonSelect({ callBack, text, style}) {
  return (
    <div className={style} onClick={callBack}>
        <h6>{text}</h6>
    </div>
  )
}

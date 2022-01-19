import { useState } from 'react'
import Prompt from './Prompt'
import PastLine from './PastLine'

let isOnControlKey = false
let isOnBKey = false
let isOnFKey = false

const Line = ({ index, value, setValues, setIndex, on }) => {
  const lineRef = (el) => (el ? el.focus() : null)
  const [point, setPoint] = useState(0)

  const keyDown = (event) => {
    console.log(event.key)
    if (event.key === 'Control') {
      isOnControlKey = true
      console.log('Control on called')
    }
    if (event.key === 'b') {
      isOnBKey = true
      console.log('bkey')
    }
    if (event.key === 'f') {
      isOnFKey = true
      console.log('bkey')
    }
    if (event.key === 'ArrowLeft') {
      if (point >= value.length) {
      } else {
        setPoint((point) => (point = point + 1))
      }
      console.log(point)
    } else if (event.key === 'ArrowRight') {
      if (point <= 0) {
      } else {
        setPoint((point) => (point = point - 1))
        console.log(point)
      }
    } else if (isOnBKey && isOnControlKey) {
      console.log('OKOKOK')
      if (point >= value.length) {
      } else {
        setPoint((point) => (point = point + 1))
      }
      console.log(point)
    } else if (isOnFKey && isOnControlKey) {
      console.log('OKOKOK')
      if (point <= 0) {
      } else {
        setPoint((point) => (point = point - 1))
      }
      console.log(point)
    } else if (
      event.key === 'Shift' ||
      event.key === 'Meta' ||
      event.key === 'Control'
    ) {
    } else if (event.key === 'Enter') {
      setIndex((index) => index++)
      setValues((value) => {
        const array = value
        return [...array, '']
      })
    } else if (event.key === 'Backspace') {
      setValues((value) => {
        const array = [...value]
        array[index] = value[index].slice(0, value[index].length - 1)
        return (value = [...array])
      })
    } else {
      if (!isOnControlKey) {
        setValues((value) => {
          const array = [...value]
          array[index] = value[index] + event.key
          return (value = [...array])
        })
        console.log(isOnBKey)
        console.log(isOnControlKey)
      }
    }
  }

  const keyUp = (event) => {
    if (event.key === 'b') {
      isOnBKey = false
    }
    if (event.key === 'f') {
      isOnFKey = false
    }
    if (event.key === 'Control') {
      isOnControlKey = false
    }
  }

  return (
    <div
      onKeyDown={(event) => keyDown(event)}
      onKeyUp={(event) => keyUp(event)}
      tabIndex={on ? '0' : ''}
      ref={on ? lineRef : null}
    >
      <Prompt value={''} />

      {on ? (
        <>
          {point > 0 ? (
            <>
              <span>{value.slice(0, value.length - point)}</span>
              <span className="blink">
                {value.slice(value.length - point, value.length - point + 1)}
              </span>
              <span>{value.slice(value.length - point + 1)}</span>
            </>
          ) : (
            <>
              <span>{value.slice(0, value.length)}</span>
              <span className="blink">&ensp;</span>
            </>
          )}
        </>
      ) : (
        <>
          <PastLine value={value} />
        </>
      )}
    </div>
  )
}

export default Line

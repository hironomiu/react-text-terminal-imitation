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
    // カーソル移動
    switch (event.key) {
      case 'Control':
        isOnControlKey = true
        break
      case 'b':
        isOnBKey = true
        break
      case 'f':
        isOnFKey = true
        break
      case 'ArrowLeft':
        if (point >= value.length) {
        } else {
          setPoint((point) => (point = point + 1))
        }
        break
      case 'ArrowRight':
        if (point <= 0) {
        } else {
          setPoint((point) => (point = point - 1))
        }
        break
      default:
        break
    }

    if (isOnBKey && isOnControlKey) {
      if (point >= value.length) {
      } else {
        setPoint((point) => (point = point + 1))
      }
    } else if (isOnFKey && isOnControlKey) {
      if (point <= 0) {
      } else {
        setPoint((point) => (point = point - 1))
      }
    } else if (
      event.key === 'Shift' ||
      event.key === 'Meta' ||
      event.key === 'Control' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight'
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
          if (point === 0) {
            array[index] = value[index] + event.key
          } else {
            // カーソル移動した位置に入力値を差し込む
            const newValue =
              value[index].slice(0, value[index].length - point) +
              event.key +
              value[index].slice(
                value[index].length - point,
                value[index].length
              )
            array[index] = newValue
          }
          return (value = [...array])
        })
      }
    }
  }

  const keyUp = (event) => {
    switch (event.key) {
      case 'b':
        isOnBKey = false
        break
      case 'f':
        isOnFKey = false
        break
      case 'Control':
        isOnControlKey = false
        break
      default:
        break
    }
  }

  return (
    <div
      className="line"
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

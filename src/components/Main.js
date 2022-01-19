import { useState } from 'react'
import Line from './Line'

const Main = ({ toggle }) => {
  const [values, setValues] = useState([''])
  const [, setIndex] = useState(0)

  return (
    <>
      <main>
        <div>
          {values.map((value, index) =>
            index === values.length - 1 ? (
              <Line
                key={index}
                index={index}
                value={value}
                setValues={setValues}
                setIndex={setIndex}
                on={true}
              />
            ) : (
              <Line
                key={index}
                index={index}
                value={value}
                setValues={setValues}
                setIndex={setIndex}
                on={false}
              />
            )
          )}
        </div>
      </main>
    </>
  )
}

export default Main

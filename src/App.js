import React, { useState, useEffect } from 'react'
import Line from './components/Line'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const array = ['']
  const [values, setValues] = useState(array)
  const [, setIndex] = useState(0)
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    setValues((values) => (values = [...values]))
  }, [isClick])

  return (
    <>
      <div onClick={() => setIsClick(!isClick)}>
        <Header />
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
        <Footer />
      </div>
    </>
  )
}

export default App

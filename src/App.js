import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  const [isClick, setIsClick] = useState(false)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // 入力カーソルにフォーカスを当てるための処理、toggle後Mainに渡し再レンダリングさせることで実装
    setToggle((toggle) => !toggle)
  }, [isClick])

  return (
    <>
      <div onClick={() => setIsClick(!isClick)}>
        <Header />
        <Main toggle={toggle} />
        <Footer />
      </div>
    </>
  )
}

export default App

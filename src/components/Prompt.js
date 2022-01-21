const Prompt = ({ value = '>>> ' }) => {
  value = value || '>>> '

  return (
    <>
      <span>{value}</span>
    </>
  )
}

export default Prompt

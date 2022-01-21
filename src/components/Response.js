const commands = new Map()
commands.set('hoge', 'Hogeeeeeeeeee!!!!')
commands.set('fuga', 'FFFFFUUUUUgggaaaa!!!!')
commands.set('ps', 'ピーエス！ピーエス！')
commands.set('help', `へるぷ\nコマンド一覧`)
commands.set('hello', `hello!!!\nこんにちは！！！`)

const Response = ({ value }) => {
  const trimedValue = value.trimStart()
  if (trimedValue.length === 0) return <></>
  if (commands.get(trimedValue)) {
    return <div className="successed-command">{commands.get(trimedValue)}</div>
  } else if (trimedValue.split(' ')[0] === 'echo') {
    return <div className="successed-command">{trimedValue.split(' ')[1]}</div>
  } else {
    return <div>command not found: {trimedValue}</div>
  }
}

export default Response

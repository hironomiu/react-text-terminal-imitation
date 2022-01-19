const commands = new Map()
commands.set('hoge', 'Hogeeeeeeeeee!!!!')
commands.set('fuga', 'FFFFFUUUUUgggaaaa!!!!')
commands.set('ps', 'ピーエス！ピーエス！')
commands.set('help', `へるぷ\nコマンド一覧`)
commands.set('hello', `hello!!!\nこんにちは！！！`)

const Response = ({ value }) => {
  if (value.length === 0) return <></>
  if (commands.get(value))
    return <div className="div-hoge">{commands.get(value)}</div>
  return <div>command not found: {value}</div>
}

export default Response

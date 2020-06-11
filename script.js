function evaluate(obj){
  return Function('"use strict";return (' + obj + ')')();
}


let ans = ''

const display = () => {
  if(ans === '') {
    ans = '0'
  }
  document.getElementById('answer').innerHTML = ans
}

window.addEventListener('keydown', e => {
  if(['9', '8', '7', '6', '5', '4', '3', '2', '1', '+', '-', '*', '/'].includes(e.key)) addOp(e.key)
  if(e.key === 'Backspace') addOp('delete')
  if(e.key === 'Enter') addOp('=')
})

const addOp = (op) => {  
  if(op === 'sign'){
    ans = evaluate(ans * -1)
    display()
    return
  }
  if(op ==='.'){
    if(ans.includes('.')){
      return
    }
  }
  if(op ==='delete'){
    if(ans.length === 0) return
    ans = ans.substr(0, ans.length-1)
    display()
    return
  }
  if(op ==='clear'){
    ans = ''
    display()
    return
  }
  if(op ==='='){
    ans = evaluate(ans)
    display()
    return
  }
  // '123.3'.includes('.')
  ans = [ans, op].join('')
  display()
}
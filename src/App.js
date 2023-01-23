
import { useEffect, useState } from 'react';
import './App.css';

function App() {  
let [todo, setTodo] = useState ([""])
let [novoTodo, setNovoTodo] = useState("")
  
useEffect(() => {
  setTodo (["tarefa1"])
},
 [])

return(
  <div className='todes'>
  <input value={novoTodo} onChange={value => setNovoTodo (value.target.value)} type="text"/>
  <button onClick={() =>adicionarNovoItem ()}>Adicionar</button>
<ul className='bolinhas'> 
  {todo.map((item, index) =>(
     <li>{item}
     <button onClick={() => deletar(index)}>Deletar</button>
     </li>
  ))}
</ul>
</div>
)

function adicionarNovoItem (){
setTodo([...todo , novoTodo])
setNovoTodo("")
}

function deletar (index){
  let temporario = [...todo]
temporario.splice(index , 1)
setTodo(temporario)
 }
}





export default App;
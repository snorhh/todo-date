import { useState } from "react";
import './Header.css'
import './App.css'
import './Description.css'

function TodoList() {

//info = object that is added to todos array, when add button clicked
const [info, setInfo] =useState({desc:"", date: ""});
const [todos, setTodos] = useState([]);

//Note to self, object spreading must be inside object = curly braces
const handleDescription = (event) => {
  setInfo({...info, desc: event.target.value});
};

const handleDate = (event) => {
  setInfo({...info, date: event.target.value});
};
  
  
const addTodo = () => {

  if (!info.desc || !info.date){
      alert("Write a description and a date")
  }

  else {
    //create a new todos array and add a shallow copy of info to it, so if info changes, it doesn't change in the array
    setTodos([...todos, {...info}]);
    setInfo({desc:"", date: ""});
   }

};

  return(

        //fieldset & ledend from article: https://css-tricks.com/how-to-add-text-in-borders-using-basic-html-elements/
        <>
         <header className='header'>
        <h2>Simple TodoList</h2>
        </header>
        <fieldset>
            <legend>Add todo:</legend>
            Description: <input onChange={handleDescription} value={info.desc} />
            Date: <input onChange={handleDate} value={info.date} />
            <button onClick={addTodo}>Add</button>   
        </fieldset>
        <table className='App'>
          <thead>
            <th>Date</th><th>Description</th>
          </thead>
          <tbody>
              {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td><td>{todo.desc}</td>
            </tr>
      ))}
          </tbody>
        </table>

      </>


    )

}
  
export default TodoList;

// Import useState from react
import { useState } from "react";
import './Header.css'
import './App.css'
import './Description.css'
function TodoList() {

// Declare states

//tehdään olio datalle, joka lisätään todos-taulukkoon, kun nappia painetaan
const [info, setInfo] =useState({desc:"", date: ""});
const [todos, setTodos] = useState([]);

//Muista, object srpeading pitää olla objectin sisällä, eli curly braces
const handleDescription = (event) => {
    setInfo({...info, desc: event.target.value});
};

const handleDate = (event) => {
    setInfo({...info, date: event.target.value});
};
  
  
  // Remember to call preventDefault() if using form
  const addTodo = () => {

    if (!info.desc || !info.date){
        alert("Write a description and date")

    }

    else {
        //tehdään infosta kopio-olio ja laitetaan se listalle, jotta siihen ei voi jälkikäteen tulla muutoksia
        setTodos([...todos, {...info}]);
        setInfo({desc:"", date: ""});
   
    }

  };

    return(

        // fieldset & ledend: https://css-tricks.com/how-to-add-text-in-borders-using-basic-html-elements/
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

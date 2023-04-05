import React, { useState } from 'react';
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {


    const [todoList, settodoList] = useState([]);


    const [value, setValue] = useState("");

    const btnSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        }

        settodoList(prev => [...prev, newTodo])
        setValue("");
    }




    return (
        <div className='container'>
            <div className="todoBlock">
                <div className="title">
                    <h1>To Do List</h1>
                </div>

                <Lists todoList={todoList} settodoList={settodoList} />

                <Form value={value} setValue={setValue} btnSubmit={btnSubmit} />


            </div>
        </div>
    )
}

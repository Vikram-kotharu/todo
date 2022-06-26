import {useEffect, useState} from 'react'
import './index.css'
const Display = () =>{
    const [todo,setTodo] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/todos')
        .then((res)=>res.json())
        .then((data)=>setTodo(data))
    },[])

    const remove = (id) =>{
        fetch(`http://localhost:8000/todos/${id}`,{
            method:"DELETE",

        }).then(()=> console.log('done and deleted'))
    }

    return(
        <>
            <div className="col-8 ml-3">
                <h3>Added Todos</h3>
                <br />
                {todo.map((item)=>{
                        return (
                            <div className="d-flex flex-row mb-4" key={item.id} >
                    <input type="checkbox" name="" id="" value="" />
                    <h4 className="ml-2">{item.name}</h4>
                    <p className='ml-2'>-{item.category}</p>
                    
                    <div className="locate">
                        
                        <button className="btn btn-danger ml-2"  type="submit" onClick={()=>{remove(item.id)}}>Remove</button>
                    </div>
                </div>

                        )
                    })}

                
                
                

            </div>
        </>
    )
}

export default Display
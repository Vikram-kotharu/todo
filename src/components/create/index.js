import { useState } from "react"

const Create = () =>{
    const [name,newName] = useState("")
    const [category,newCate] = useState("")
    const subs = (event) => {
        event.preventDefault()
        const newone = {
            name,
            category
        }
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newone),

        }).then(()=>{
            console.log('done!')
        })

        console.log(newone)
    }
    return(
        <>
            <form  className="col-4" onSubmit={subs}>
                <label className="mr-3" for="name">Todo name</label>
                <input className="form-control shadow col-12" type="text" name="" id="name" value={name} placeholder="Enter name" onChange={(e)=>newName(e.target.value)} />
                <br />
                <label className="" for="name2">Category</label>
                <input className="form-control col-12 shadow " type="text" name="" id="name2" value={category} placeholder='Enter category' onChange={(e)=>newCate(e.target.value)} />
                <button className="btn btn-danger mt-4 " type="submit">ADD</button>
            </form>
        </>
    )
}

export default Create

import Create from "../create"
import Display from "../displaytodo"

const Head = () =>{
    return(
        <>
            <div className='container'>
                 <h1>Todo List</h1>
                 <br/>
                 <div className='d-flex flex-row'>

                    <Create/>
                    <Display/>

                 </div>


            </div>
        </>
    )
}

export default Head
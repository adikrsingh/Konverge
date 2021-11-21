import React , {useState,useEffect}from "react";

function MyAPIApp(){
    const[user,setUser] = useState({});
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
            res
              .json()
              .then(res => setUser(res))
              .catch(() => setErrors(true));
        }
        fetchData();
       
    } , [])
    var result = [];
    result = JSON.stringify(user,null,1).split("},");
    result[0] =  result[0].replace("[","");
    for(let i = 0; i<result.length;i++){
        result[i] = result[i].replace("{","");
    }
    result[result.length-1] =  result[result.length-1].replace("]","");
    result[result.length-1] =  result[result.length-1].replace("}","");


    return(
        <>
        <h1>Konverge API Assignment</h1>
        <h3>Result:</h3>

        <div style={{margin : "10px 0", alignItems:"center", display:'flex', justifyContent:'center'}}>
            <ul style={{backgroundColor: "lightgrey",border: '2px solid green', width:'50%'}}>
                {
                    result.map((res,idx)=>{
                        return <li style={{margin : "10px 0"}} key = {idx}>{res}</li>
                    })
                }
            </ul>
            
            
        </div>
       
        </>
    )
}

export default MyAPIApp;
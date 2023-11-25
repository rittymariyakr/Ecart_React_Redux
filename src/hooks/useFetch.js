import { useEffect, useState } from "react"

// creating custom hook
const useFetch = (url)=>{

    //creatinhg a state to hold data
    const [data, setData] = useState(null)
    //logic
    useEffect(()=>{ 
        fetch(url).then(res=>{
            //to avoid unnecessary data use .json
            res.json().then(result=>{
                setData(result.products)
            })
        })
    },[]) //depency is set as empty array. becon it needs Runs only on the first render
    return data

}

export default useFetch;
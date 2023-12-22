import { useEffect, useState } from "react"

// creating custom hook/ name should starts with use in small letters
const useFetch = (url)=>{

    //creatinhg a state to hold data
    const [data, setData] = useState(null)
    //logic for the useFetch hook  //we need to display the data when the home page is loading first so use useEffect
    useEffect(()=>{ 
        fetch(url).then(res=>{
            //to avoid unnecessary data use .json
            res.json().then(result=>{
                setData(result.products) //in dummyjson, data are inside produncts key 
            })
        })
    },[]) //depency is set as empty array. becon it needs Runs only on the first render
    return data

}

export default useFetch; //it import at Home.jsx
'use client'

import { FirstAction } from "@/Redux/action"
import { useDispatch, useSelector } from "react-redux"

const About=()=>{
    const Result=useSelector((state:any)=>state.FirstStateValue)
    const dispatch=useDispatch()
    return(
        <div>
            <h1>About</h1>
            <p>{Result?"Sidd":"Get"}</p>
            <p onClick={()=>dispatch(FirstAction())}>Update</p>
        </div>
    )
}

export default About
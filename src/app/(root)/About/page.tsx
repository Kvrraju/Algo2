'use client'

import { FirstAction } from "@/Redux/action"
import { useDispatch, useSelector } from "react-redux"

const About=()=>{
    const Result=useSelector((state:any)=>state.FirstStateValue)
    const dispatch=useDispatch()
    return(
        <div className="p-10 text-black">
            <h1>About</h1>
            <p>{Result?"Sidd":"Get"}</p>
          
        </div>
    )
}

export default About
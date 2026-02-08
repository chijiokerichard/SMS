import { useState } from "react";

export function useCustomState(initial=false){
    const [state,setState] = useState<boolean>(initial)
    function toggleState(){
        setState(prev=>prev=true)
        console.log(state)
    }
    function toggleStateOut(){
        setState(prev=>prev=false)
        console.log(state)
    }
    return [state,toggleState,toggleStateOut] as const
}
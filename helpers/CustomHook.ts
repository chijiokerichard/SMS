import { useState } from "react";

export function useCustomState(){
    const [state,setState] = useState<Boolean>(false)
    function toggleState(){
        setState(prev=>!prev)
    }
    return [state,toggleState]
}
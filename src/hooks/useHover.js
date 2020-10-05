import { useEffect, useState } from 'react'

const useHover = (ref) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const refCurrent = ref.current;
        if(ref.current){
            ref.current.addEventListener("mouseenter", ()=>setHovered(true))
            ref.current.addEventListener("mouseleave", ()=>setHovered(false))
        }
        return ()=>{
            refCurrent.removeEventListener("mouseleave",null, true)
        }
    }, [ref])

    return [hovered]
}

export default useHover

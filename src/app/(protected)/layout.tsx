import { useAuth } from "@/Context/useAuth";
import { useRouter } from "next/navigation";
import React from "react"

const ProtectedLayout = ({
    children
}:{
    children:React.ReactNode
}) =>{
    const router = useRouter();
    const {authStatus} = useAuth()
    if(!authStatus){
        router.push("/login");
        return <></>
    }

    return children
}



export default ProtectedLayout;
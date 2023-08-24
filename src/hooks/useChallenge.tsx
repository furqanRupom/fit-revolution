import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUser } from "./useUser";

const useChallenge = () => {
    const {user} = useUser();
    const {isLoading,refetch,data} = useQuery({
        queryKey:["myChallenges"],
        queryFn:async()=>{
            const res = await axios.get(`/api/myChallenges/${user?.email}`)
            return res.data
        }
    })

     return {refetch,data}

};

export default useChallenge;
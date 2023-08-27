import ChallengeDetails from "@/components/ChallengeDetails";
import { Metadata } from "next";


const challengeDetailsPage = ({params}:any) => {

    return (
        <div>
            <ChallengeDetails id={params.id} />
        </div>
    );
};

export default challengeDetailsPage;
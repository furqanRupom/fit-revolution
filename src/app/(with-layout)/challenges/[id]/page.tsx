import ChallengeDetails from "@/components/ChallengeDetails";

const challengeDetailsPage = ({params}:any) => {

    return (
        <div>
            <ChallengeDetails id={params.id} />
        </div>
    );
};

export default challengeDetailsPage;
import ChallengeOpt from "@/components/ChallengeOpt";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'fitRevolution | Challenges',
    description: 'This is our Challenges page'
}

const challengesPage= () => {
    return (
        <section className="px-10 lg:px-0">

            <ChallengeOpt />

        </section>
    );
};

export default challengesPage;
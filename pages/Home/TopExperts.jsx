import { useQuery } from "react-query";
import ExpertCard from "../../components/ExpertCard";
import { BASE_URL } from "../../constants";

async function fetchExperts() {
    const res = await fetch(`${BASE_URL}/Expert`);
    return await res.json();
}

const UpdatedThisWeek = () => {
    const { isLoading, data } = useQuery('experts', fetchExperts);

    return (
        <section className="-mt-6 pb-20">
            <div className="container mx-auto">
                <h2 className="font-serif py-4 text-2xl leading-none font-semibold text-gray-700">
                    Top Experts
                </h2>

                <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-6">
                    {
                        data && (
                            data.map(expert => (
                                <ExpertCard
                                    key={expert._id}
                                    expert={expert}
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default UpdatedThisWeek;
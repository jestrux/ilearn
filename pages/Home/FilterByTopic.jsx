import { useQuery } from "react-query";
import MultiRangeSlider from "../../components/MultiRangeSlider";
import { BASE_URL } from "../../constants";

const TopicFilter = ({
    image = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800",
    name = "Food & Nutrition",
}) => {
    return (
        <div>
            <div className="rounded-md overflow-hidden h-48 relative">
                <img className="absolute w-full h-full object-cover" src={image} alt="" />
            </div>

            <h5 className="mt-3 text-lg leading-none font-medium text-gray-700">
                {name}
            </h5>
        </div>
    );
}

const SimpleTopicFilter = ({
    topic = {}
}) => {
    const {
        color = "#fCD931",
        name = "Food & Nutrition",
    } = topic;

    return (
        <div className="cursor-pointer hover:bg-gray-50 border-2 rounded-lg overflow-hidden flex items-center">
            <div className="h-12 w-12 px-2 flex items-center relative">
                <span className="rounded-full w-6 h-6 flex-shrink-0"
                    style={{ background: color }}
                ></span>
                <span className="rounded-full -ml-3 w-6 h-6 flex-shrink-0 opacity-60"
                    style={{ background: color }}
                ></span>
            </div>

            <h5 className="ml-1 text-base leading-none font-medium text-gray-700">
                {name}
            </h5>
        </div>
    );
}

async function fetchTopics() {
    const res = await fetch(`${BASE_URL}/Topic`);
    return await res.json();
}

const FilterByTopic = () => {
    const { isLoading, data } = useQuery('topics', fetchTopics);

    return (
        <section className="pt-12 pb-20">
            <div className="container mx-auto">
                <h2 className="font-serif py-4 text-2xl leading-none font-semibold text-gray-700">
                    Filter By Topic
                </h2>

                <div className="mt-4 grid grid-cols-5 gap-4">
                    {
                        data && (
                            data.map(topic => (
                                <SimpleTopicFilter
                                    key={topic._id}
                                    topic={topic}
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default FilterByTopic;
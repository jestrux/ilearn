import LessonCard from "../../../../components/LessonCard";

const Lessons = () => {
    return (
        <section className="pt-8 pb-16">
            <div className="container mx-auto max-w-4xl">
                <h2 className="font-serif py-4 text-2xl leading-none font-semibold text-gray-700">
                    Lessons
                </h2>

                <div className="mt-4 space-y-8">
                    <LessonCard
                        course={{
                            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800"
                        }}
                    />
                    <LessonCard
                        course={{
                            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDR8fG11c2ljfGVufDB8fHx8MTYzMzkxNzc2MQ&ixlib=rb-1.2.1&q=80&w=800"
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Lessons;
import Link from 'next/link'

export default function CourseCard({course = {}}){
    let {
        _id = "1",
        image = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800",
        name = "Making the perfect Spaghetti Bolognese in under an hour.",
        price = 90000,
        topic = {
            name: "Food & Nutrition",
            color: "#fCD931"
        },
        expert = {
            image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDM3fHxmYWNlfGVufDB8fHx8MTYzMzkxOTE4MA&ixlib=rb-1.2.1&q=80&w=80",
            name: "Jucinda Raymaz",
            title: "Havard, fellow, Paris Cooking Alumni"
        },
    } = course;

    topic = course.topics[0];
    return (
        <Link href={`/courses/${_id}`}>
            <div className="cursor-pointer relative border-2 rounded-lg overflow-hidden">
                <div className="rounded-md overflow-hidden h-80 relative">
                    <img className="absolute w-full h-full object-cover" src={image} alt="" />
                </div>

                <div className="border-2 m-0.5 py-5 px-6 rounded-md z-10 absolute inset-0 bg-gradient-to-r from-white via-white/90">
                    <div className="w-3/5 h-full flex flex-col items-start">
                        <span className="px-2 py-1.5 rounded-sm text-xs leading-none font-light text-white"
                            style={{background: topic.color}}
                        >
                            { topic.name }
                        </span>

                        <h3 className="font-serif mt-3 text-3xl leading-snug text-gray-700">
                            { name }
                        </h3>

                        <p className="my-3 text-xl leading-snug text-indigo-700">
                            Tshs. {(price*1000).toLocaleString()}/-
                        </p>

                        <div className="mt-auto">
                            <span className="mt-3 text-sm leading-none font-light text-gray-700">
                                Taught By
                            </span>

                            <div className="mt-1 flex items-center">
                                <div className="relative w-9 h-9 rounded-full border border-black/50">
                                    <img className="absolute w-full h-full rounded-full object-cover" 
                                        src={expert.image} 
                                        alt="" 
                                    />
                                </div>

                                <div className="ml-1">
                                    <h5 className="text-sm font-medium leading-none">
                                        { expert.name }
                                    </h5>
                                    <p className="mt-0.5 text-xs opacity-60">
                                        { expert.title }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
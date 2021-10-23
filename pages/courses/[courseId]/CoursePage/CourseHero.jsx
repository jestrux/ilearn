const CourseHero = ({ course }) => {
    const {
        topic, name, image
    } = course;
    return (
        <section className="py-4 bg-gradient-to-br from-blue-700 to-indigo-500 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="flex-1 pr-8 pt-12 pb-10 flex flex-col items-start justify-center max-w-xl">
                    <span className="font-sans rounded-sm text-sm leading-none opacity-80 uppercase tracking-wider">
                        {topic.name}
                    </span>

                    <h2 className="font-serif py-4 text-3xl leading-relaxed font-semibold">
                        {name}
                    </h2>

                    <div className="mt-auto flex items-start">
                        <div className="relative w-20 h-20 rounded-xl border border-whiteack/50">
                            <img className="absolute w-full h-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDM3fHxmYWNlfGVufDB8fHx8MTYzMzkxOTE4MA&ixlib=rb-1.2.1&q=80&w=80" alt="" />
                        </div>

                        <div className="ml-4">
                            <span className="-mt-0.5 font-sans text-xs leading-none opacity-60 uppercase tracking-widest">
                                Expert
                            </span>
                            <h5 className="mt-1 text-xl font-medium leading-none">
                                Jucinda Raymaz
                            </h5>
                            <p className="mt-2.5 leading-none opacity-60">
                                Havard, fellow, Paris Cooking Alumni
                            </p>
                        </div>
                    </div>

                    {/* <a href="#" className="mt-3 mb-4 py-2.5 px-5 rounded-md bg-white text-blue-700 sbg-gradient-to-r from-red-500 via-red-400 to-yellow-500 stext-white inline-flex items-center">
                        Start Course

                        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 12l-4-4v3H3v2h15v3l4-4z" /></svg>
                    </a> */}
                </div>

                <div className="h-[400px] w-[600px] relative">
                    <div className="rounded-md absolute inset-x-0 inset-y-6 overflow-hidden">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseHero;
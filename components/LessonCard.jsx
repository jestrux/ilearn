import Link from 'next/link'

export default function LessonCard({lesson = {}}){
    const {
        _id = "1",
        course_id = "4",
        image = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800",
        title = "Setting up ingredients",
        description = "Show touched parents of caught agreed her your a tower, so a her english of him, they she desires big the what continued copy. King know alarm the see countries findings. World a its understood. A into may last of typically of her occasion of each the own.",
        duration = "1 hr 20 mins",
    } = lesson;
    return (
        <Link href={`/courses/${course_id}/lessons/${_id}`}>
            <div className="p-4 bg-indigo-50/70 shadow rounded-lg flex cursor-pointer relative">
                <div className="rounded-md overflow-hidden h-48 w-80 relative">
                    <img className="absolute w-full h-full object-cover" src={image} alt="" />

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-40"></div>

                    <div className="absolute inset-0 m-auto w-12 h-12 bg-blue-50/70 border-2 border-white rounded-full flex items-center justify-center">
                        <svg className="text-indigo-900 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex-1 flex flex-col px-6">
                    <div>
                        <h3 className="mt-3 text-xl font-medium leading-snug text-gray-700">
                            { title }
                        </h3>

                        <p className="mt-2 text-sm leading-loose opacity-50">
                            { description.substring(0, 200) }...
                        </p>
                    </div>

                    <div className="mt-auto mb-3 inline-flex items-center">
                        <span className="text-xs leading-none opacity-40">
                            LESSON 1
                        </span>
                        <span className="ml-4 text-xs leading-none opacity-50 inline-flex items-center">
                            <svg className="w-4 opacity-80 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="7.25" stroke-width="1.5" />
                                <path stroke-width="1.5" d="M12 8V12L14 14"></path>
                            </svg>

                            { duration }
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
import { useQuery } from "react-query";
import CourseCard from "../../components/CourseCard";
import { BASE_URL } from "../../constants";

async function fetchPopularCourses() {
    const res = await fetch(`${BASE_URL}/Course?limit=2`);
    return await res.json();
}

const PopularCourses = () => {
    const { isLoading, data } = useQuery('courses', fetchPopularCourses);

    return (
        <section className="pt-6 pb-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="font-serif py-4 text-2xl leading-none font-semibold text-gray-700">
                    Popular Courses
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-8">
                    {
                        data && (
                            data.map(course => (
                                <CourseCard
                                    key={course._id}
                                    course={course}
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default PopularCourses;
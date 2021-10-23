import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import CourseCard from "../../components/CourseCard";
import { BASE_URL } from "../../constants";

async function fetchCourseResults(searchQuery) {
    const res = await fetch(`${BASE_URL}/Course?q=${searchQuery}`);
    return await res.json();
}

const CourseResults = () => {
    const router = useRouter();
    const { isLoading, data, refetch } = useQuery('coursesResults', () => fetchCourseResults(router.query.q));

    useEffect(() => {
        refetch();
    }, [router.query.q]);

    return (
        <section className="pt-4 pb-20">
            <div className="container mx-auto">
                <h2 className="font-serif py-4 text-2xl leading-none font-semibold text-gray-700">
                    Courses
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

export default CourseResults;
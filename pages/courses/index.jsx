import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import CourseCard from "../../components/CourseCard";
import { BASE_URL } from "../../constants";
import PriceRange from "./PriceRange";

async function fetchCourses(min, max) {
    let url = `${BASE_URL}/Course?`;
    if(min != undefined)
        url += `whereIsGreaterThanOrEqualPrice=${min}&`;
    if(max != undefined)
        url += `andWhereIsLessThanOrEqualPrice=${max}&`;

    const res = await fetch(url);
    return await res.json();
}

async function fetchPrices() {
    const res = await fetch(`${BASE_URL}/Course?pluck=price`);
    return await res.json();
}

const Courses = () => {
    const router = useRouter();
    const { isLoading, data, refetch } = useQuery('courses', () => fetchCourses(router.query.minPrice, router.query.maxPrice));
    const dbPrices = useQuery('prices', fetchPrices);
    let prices;

    useEffect(() => {
        refetch();
    }, [router.query.minPrice, router.query.maxPrice]);

    if(dbPrices.data){
        prices = dbPrices.data.sort((a, b) => a - b);
    }

    return (
        <>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto flex items-center justify-between">
                    <h2 className="font-serif text-3xl leading-none text-gray-700">
                        Courses
                    </h2>

                    { prices && prices.length &&
                        <PriceRange 
                            min={prices[0]}
                            max={prices[prices.length - 1]}
                            // onChange={handlePriceChanges}
                        />
                    }
                </div>
            </section>

            <section className="pt-6 pb-12">
                <div className="container mx-auto">
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
        </>
    );
}

export default Courses;
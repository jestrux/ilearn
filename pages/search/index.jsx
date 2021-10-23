import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CourseResults from './CourseResults';

const SearchResults = () => {
    const router = useRouter();

    useEffect(() => {
        console.log("Search changed");
    }, [router.query.q]);

    return (
        <>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <h2 className="text-xl text-gray-500">
                        Search results for: &nbsp;
                        <span className="text-black font-semibold">{router.query.q}</span>
                    </h2>
                </div>
            </section>

            <CourseResults />
        </>
    );
}
 
export default SearchResults;
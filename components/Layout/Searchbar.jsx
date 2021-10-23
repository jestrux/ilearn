import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { debounce } from '../../utils';

const Searchbar = () => {
    const router = useRouter();
    const [query, setQuery] = useState(router.query.q);

    const handleSearch = debounce((value) => {
        // const value = e.target.value;
        if(value && value.length){
            if(router.pathname == "/search")
                router.push(`/search?q=${value}`, undefined, { shallow: true });
            else
                router.push(`/search?q=${value}`);
        }
        else if(router.pathname == "/search")
            router.push("/");
      },
      500
    );

    useEffect(() => {
        handleSearch(query);
    },[query])

    return (
        <div className="relative flex items-center flex-1 rounded-full w-[340px]">
            <input type="search" 
                className="w-full pb-1.5 pt-1 pl-9 pr-2 font-normal transition border bg-transparent border-gray-300 header-search rounded outline-none"
                placeholder="Search for courses, experts or lessons"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <svg fill="currentColor" className="text-gray-400 opacity-90 w-5 h-5 absolute top-2 left-2.5">
                <path fillRule="evenodd" d="M3.88 2.014a6.762 6.762 0 0110.518 5.622 6.762 6.762 0 01-1.56 4.319l4.104 4.103a.625.625 0 01-.884.884l-4.103-4.103A6.763 6.763 0 113.88 2.014zm3.756.111a5.511 5.511 0 105.512 5.511M7.636 2.125a5.511 5.511 0 015.512 5.511" />
            </svg>
        </div>
    );
}
 
export default Searchbar;
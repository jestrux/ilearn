import Link from 'next/link'
import Searchbar from './Searchbar';

const Navigation = () => {
    return (
        <header className="bg-white sticky top-0 mx-auto z-50">
            <div className="container mx-auto py-3 flex w-full items-center">
                <Link href="/">
                    <span className="cursor-pointer clip-bg font-serif text-transparent bg-gradient-to-r from-blue-700 to-indigo-500 text-2xl font-bold font-heading">
                        iLearn
                    </span>
                </Link>

                <ul className="hidden md:flex px-4 ml-auto font-semibold font-heading space-x-12">
                    <li>
                        <Link href="/">
                            <span className="cursor-pointer text-sm text-gray-500 hover:text-gray-400 uppercase tracking-wide">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses">
                            <span className="cursor-pointer text-sm text-gray-500 hover:text-gray-400 uppercase tracking-wide">
                                Courses
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a className="text-sm text-gray-500 hover:text-gray-400 uppercase tracking-wide" href="#">Topics</a>
                    </li>
                    <li>
                        <a className="text-sm text-gray-500 hover:text-gray-400 uppercase tracking-wide" href="#">
                            Experts
                        </a>
                    </li>
                </ul>

                <div className="ml-5 flex items-center">
                    <Searchbar />
                    <div className="ml-3 flex items-center space-x-5">
                        <a className="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
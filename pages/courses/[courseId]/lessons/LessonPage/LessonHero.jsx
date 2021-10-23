import Playlist from "./Playlist";

const LessonHero = ({ lesson = {} }) => {
    const {
        name, image
    } = lesson;
    return (
        <section className="py-16 bg-gradient-to-br from-blue-700 to-indigo-500">
            <div className="container mx-auto" style={{marginBottom: "-250px"}}>
                <div className="bg-white shadow rounded p-4 flex jus">
                    <div className="flex-shrink-0 h-[500px] w-full max-w-[850px] relative rounded-md overflow-hidden">
                        <div className="absolute inset-0">
                            <img className="w-full h-full object-cover" src={image} alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-40"></div>

                        <div className="absolute inset-0 m-auto w-16 h-16 bg-blue-50/70 border-2 border-white rounded-full flex items-center justify-center">
                            <svg className="text-indigo-900 w-8 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="hidden xl:block flex-1 pl-4 h-[500px]" style={{minWidth: 0}}>
                        <Playlist />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LessonHero;
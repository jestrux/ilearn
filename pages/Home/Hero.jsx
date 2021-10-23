const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-700 to-indigo-500 text-white">
            <div className="container mx-auto flex">
                <div className="flex-1 py-16">
                    <small className="text-base opacity-80">
                        More than 1,000 hours of curated, well-paced lessons
                    </small>
                    <h2 className="font-serif py-4 text-4xl leading-snug font-semibold">
                        Learn from industry experts,<br />
                        anytime, wherever you are,<br /> 
                        at your own pace.
                    </h2>

                    <a href="#" className="mt-3 mb-4 py-2.5 px-5 rounded-md bg-gradient-to-r from-red-500 via-red-400 to-yellow-500 text-white inline-flex items-center">
                        Get Started Now

                        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 12l-4-4v3H3v2h15v3l4-4z" /></svg>
                    </a>
                </div>

                <div className="w-3/5 max-w-[600px] relative">
                    <div className="relative flex items-end justify-center h-full w-full inset-0 overflow-hidden">
                        <div className="absolute w-[600px] h-[600px] top-[-35px] overflow-hidden rounded-full border border-white/20">
                            <img className="h-72 absolute bottom-32 -mb-2 left-3 object-cover" src="/images/students/3.png" alt=""
                                style={{ mixBlendMode: "luminosity" }}
                            />

                            <img className="z-10 h-72 bottom-40 absolute -mr-2 -right-24 object-cover" src="/images/students/2.png" alt=""
                                style={{ mixBlendMode: "luminosity" }}
                            />
                        </div>

                        <div className="top-24 mt-1 backdrop-filter backdrop-blur-xl absolute w-[300px] h-[300px] rounded-full bg-[#ccd6ff] overflow-hidden"
                            style={{mixBlendMode: "soft-light"}}
                        >
                            <img className="z-10 h-64 bottom-4 absolute -mr-2 right-3 object-cover" src="/images/students/1.png" alt=""
                                style={{ mixBlendMode: "luminosity" }}
                            />
                        </div>

                        <div className="z-20 absolute w-[450px] h-[450px] top-[20px] rounded-full overflow-hidden border border-white/20">
                            <img className="h-80 top-24 left-8 absolute object-cover" src="/images/students/4.png" alt="" />
                            {/* <img className="h-80 top-20 left-3 absolute object-cover object-right " src="/images/students/5.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
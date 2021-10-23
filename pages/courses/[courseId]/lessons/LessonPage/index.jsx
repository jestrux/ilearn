import LessonHero from "./LessonHero";

const LessonPage = ({lesson}) => {
    console.log("Lesson: ", lesson);
    return (
        <>
            <LessonHero lesson={lesson} />
            <section className="pb-12" style={{paddingTop: "220px"}}>
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <h2 className="font-serif text-2xl leading-snug font-semibold mb-2">
                            { lesson.title }
                        </h2>

                        <p className="leading-loose opacity-70">
                            { lesson.description }
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default LessonPage;
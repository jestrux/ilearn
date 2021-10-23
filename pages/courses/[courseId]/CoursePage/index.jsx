import CourseHero from "./CourseHero";
import Lessons from "./Lessons";

const defaultCourse = {
    _id: "1",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800",
    name: "Making the perfect Spaghetti Bolognese in under an hour.",
    price: 90000,
    topic: {
        name: "Food & Nutrition",
        color: "#fCD931"
    },
};

const CoursePage = ({course = defaultCourse}) => {
    return (
        <>
            <CourseHero course={defaultCourse} />
            <Lessons />
        </>
    );
}
 
export default CoursePage;
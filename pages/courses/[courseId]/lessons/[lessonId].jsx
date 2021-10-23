import LessonPage from "./LessonPage";

const SingleLesson = ({lesson}) => {
    return (
        <LessonPage lesson={lesson} />
    );
}

export async function getServerSideProps({ params }) {
    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()
    const defaultLesson = {
        _id: params.lessonId,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHx8fHwxNjMzOTE3MzY5&ixlib=rb-1.2.1&q=80&w=800",
        title: "Setting up ingredients",
        description: "Show touched parents of caught agreed her your a tower, so a her english of him, they she desires big the what continued copy. King know alarm the see countries findings. World a its understood. A into may last of typically of her occasion of each the own.",
        duration: "1 hr 20 mins",
    };
  
    return { props: { lesson: defaultLesson } }
  }
 
export default SingleLesson;
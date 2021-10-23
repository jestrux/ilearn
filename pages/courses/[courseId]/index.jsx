import CoursePage from "./CoursePage";

const SingleCourse = ({course}) => {
    return (
        <CoursePage course={course} />
    );
}

export async function getServerSideProps({ params }) {
    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()
  
    return { props: { course: params.courseId } }
  }
 
export default SingleCourse;
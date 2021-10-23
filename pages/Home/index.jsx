import { useQuery } from "react-query";
import { BASE_URL } from "../../constants";
import Hero from "./Hero";
import FilterByTopic from "./FilterByTopic";
import PopularCourses from "./PopularCourses";
import TopExperts from "./TopExperts";

async function fetchCourses() {
  const res = await fetch(`${BASE_URL}/Activity?limit=3`);
  return await res.json();
}

export default function Home() {
  const courses = useQuery('courses', fetchCourses);
  return (
    <>
      <Hero />
      <PopularCourses />
      <FilterByTopic />
      <TopExperts />
    </>
  );
}
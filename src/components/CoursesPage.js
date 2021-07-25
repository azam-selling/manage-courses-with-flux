import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CoursePage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) {
      loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }
  function handleDelete(event) {
    deleteCourse(event.target.id).then(() => {
      toast.success("Course deleted.");
    });
  }

  return (
    <>
      <h2>Available Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add course
      </Link>
      <CourseList courses={courses} onDelete={handleDelete} />
    </>
  );
}

export default CoursePage;

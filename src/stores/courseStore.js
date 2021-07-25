import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionType from "../actions/actionTypes";
const CHANGE_EVENT = "change";

let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

export default store;

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    case actionType.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;

    case actionType.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;

    case actionType.DELETE_COURSE:
      _courses = _courses.filter(
        (course) => course.id !== parseInt(action.courseId, 10)
      );
      store.emitChange();
      break;
    default:
    //Do nothing
  }
});

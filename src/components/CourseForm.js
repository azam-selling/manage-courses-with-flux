import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        error={props.errors.title}
        onChange={props.onChange}
        value={props.course.title}
      />
      <div className="form-group">
        <label>Author</label>
        <select
          id="author"
          name="authorId"
          className="form-control"
          value={props.course.authorId || ""}
          onChange={props.onChange}
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>
      <TextInput
        id="category"
        name="category"
        label="Category"
        error={props.errors.category}
        onChange={props.onChange}
        value={props.course.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;

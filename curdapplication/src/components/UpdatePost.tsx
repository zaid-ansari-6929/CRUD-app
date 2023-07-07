import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

interface postProps {
  setPostValue: (value: any) => typeof value;
  post: any;
}

const UpdatePost: React.FC<postProps> = ({ setPostValue, post }) => {
  const initialValues = {
    title: post.title,
    body: post.body,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Body is required"),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log(values);
    setPostValue(values);
    resetForm();
  };

  const TitleInput: React.FC = () => (
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <Field type="text" id="title" name="title" className="form-control" />
      <ErrorMessage name="title" component="div" className="error" />
    </div>
  );

  const BodyInput: React.FC = () => (
    <div className="form-group">
      <label htmlFor="body">Body</label>
      <Field as="textarea" id="body" name="body" className="form-control" />
      <ErrorMessage name="body" component="div" className="error" />
    </div>
  );

  return (
    <div className="container">
      <h2>Update Post</h2>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TitleInput />
          <BodyInput />

          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdatePost;

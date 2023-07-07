import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

interface postProps{
    setPostValue:(value:any)=>typeof value
}

const AddPost: React.FC<postProps>= (props) => {
  const initialValues = {
    title: '',
    body: '',
  };

  

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required'),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    props.setPostValue(values)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    resetForm();
  };

  const TitleInput: React.FC = () => (
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <Field
        type="text"
        id="title"
        name="title"
        className="form-control"
      />
      <ErrorMessage name="title" component="div" className="error" />
    </div>
  );

  const BodyInput: React.FC = () => (
    <div className="form-group">
      <label htmlFor="body">Body</label>
      <Field
        as="textarea"
        id="body"
        name="body"
        className="form-control"
      />
      <ErrorMessage name="body" component="div" className="error" />
    </div>
  );

  return (
    <div className="container">
      <h2>Add Post</h2>
      <Formik
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

export default AddPost;

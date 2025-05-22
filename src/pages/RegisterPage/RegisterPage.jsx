import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import styles from "./RegisterPage.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Minimum 7 characters").required("Required"),
});

const Register = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.section}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await dispatch(register(values)).unwrap();
            toast.success("Registration successful!");
            resetForm();
          } catch (error) {
            toast.error(`Error: ${error}`);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Register;

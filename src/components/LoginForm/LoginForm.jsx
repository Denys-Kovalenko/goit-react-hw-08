import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label htmlFor="password">Password</label>
        <Field
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

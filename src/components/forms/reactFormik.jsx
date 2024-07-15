import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormikLoginForm = () => {
  return (
    <div className="bg-gray-300 flex items-center justify-center min-h-screen ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={yup.object({
          email: yup.string().email("อีเมลไม่ถูกต้อง").required("ต้องกรอก"),
          password: yup
            .string()

            .min(6, "รหัสต้องยาว 6 ตัวขึ้นไป")
            .max(32, "รหัสต้องน้อยกว่า 32 ตัว")
            .required("ต้องกรอก"),
        })}
        onSubmit={(value, { setSubmitting }) => {
          console.log(value);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email Address</label>
              <Field
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <ErrorMessage name="email" component="p" />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={yup.object({
          email: yup.string().email("อีเมลไม่ถูกต้อง").required("ต้องกรอก"),
          password: yup
            .string()

            .min(6, "รหัสต้องยาว 6 ตัวขึ้นไป")
            .max(32, "รหัสต้องน้อยกว่า 32 ตัว")
            .required("ต้องกรอก"),
        })}
        onSubmit={(value, { setSubmitting }) => {
          console.log(value);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email Address</label>
              <Field
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <ErrorMessage name="email" component="p" />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLoginForm;

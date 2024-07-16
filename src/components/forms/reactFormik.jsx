import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormikLoginForm = () => {
  return (
    <div>
      <div className="bg-fade-bottom flex items-center justify-center min-h-screen bg-scroll">
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
            <Form className="flex flex-col">
              <div>
                <label className="label">Email Address</label>
                <Field name="email" className="input" />
                <ErrorMessage name="email" component="p" />
              </div>

              <div>
                <label className="label">Password</label>
                <Field name="password" type="password" className="input" />
                <ErrorMessage name="password" component="div" />
              </div>

              <button className="button-submit" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikLoginForm;

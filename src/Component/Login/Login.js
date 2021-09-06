import React from "react";
import LoginForm from "./LoginForm";
import * as Yup from "yup";
import { useHistory } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const history = useHistory();

  const onSubmit = (values) => {
    console.log("lOGIN", values);
    localStorage.setItem("token", "token");
    history.push("/");
  };
  return (
    <>
      <LoginForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Login;

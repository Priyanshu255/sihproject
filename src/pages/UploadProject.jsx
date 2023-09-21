import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import { useState } from "react";

const initialValues = {
  name: "",
  university: "",
  domain: "",
  techUsed: "",
  teamMembers: "",
  description: "",
  // video: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  university: yup.string().required("required"),
  domain: yup.string().required("required"),
  techUsed: yup.string().required("required"),
  teamMembers: yup.string().required("required"),
  description: yup.string().required("required"),
  // video: yup.s
});

const UploadProject = () => {
  const [prodata, setProdata] = useState({});
  const handleFormSubmit = () => {
    console.log(prodata);
    projectData.push(prodata)
  };
  return (
    <>
      <TopBar pageName="Upload Project" />
      <div>
      <Formik
        onSubmit={(values) =>{
          console.log(values);
          // setProdata(values);
          // handleFormSubmit();
        }}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center mt-[80px]"
          >
            <div className="flex flex-col gap-6 w-[300px] justify-center ">
              <TextField
                fullWidth
                // color=""
                variant="filled"
                type="text"
                label="Name of Project"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                // color=""
                variant="filled"
                type="text"
                label="University"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.university}
                name="university"
                error={!!touched.university && !!errors.university}
                helperText={touched.university && errors.university}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Domain"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.domain}
                name="domain"
                error={!!touched.domain && !!errors.domain}
                helperText={touched.domain && errors.domain}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Technology Used"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.techUsed}
                name="techUsed"
                error={!!touched.techUsed && !!errors.techUsed}
                helperText={touched.techUsed && errors.techUsed}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Team Member(s)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.teamMembers}
                name="teamMembers"
                error={!!touched.teamMembers && !!errors.teamMembers}
                helperText={touched.teamMembers && errors.teamMembers}
              />
              <Box className="flex justify-center">
                <Button type="submit" color="secondary" variant="contained">
                  Upload
                  {/* <Link to="/university">Upload</Link> */}
                </Button>
              </Box>
            </div>
          </form>
        )}
      </Formik>
      </div>
    </>
  );
};

export default UploadProject;

import React from "react";
import { Field, Form, Formik, FormikProps, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Datetime from "react-datetime";



import "./styles.css";
const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

var yesterday = Datetime.moment().subtract(1, "day");
var valid = function (current) {
  return current.isAfter(yesterday);
};

export default function App() {
  return (
    <div>
     <h1>My Form</h1>
     <Formik
       initialValues={{  taskName: '', date: '' }}
       validationSchema = {Yup.object().shape({
         taskName:Yup.string().required("Please enter task name")

       })}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(errors, touched) => (
         <Form>
           <Field name="taskName" placeholder="* Task Name" component={MyInput} />
           <div style={{ color: "red", fontWeight: "bold" }}>
                      <ErrorMessage name="taskName" />
                    </div>
           <Datetime
              timeFormat={true}
              isValidDate={valid}
              // onFocus={!sampleProfile?handleOnFocus:()=>{}}
              inputProps={{ placeholder: "Task due date" }}
            />
 
        
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  );
}

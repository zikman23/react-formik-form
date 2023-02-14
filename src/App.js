import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: (values) => {
      alert('Login Successful');
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailError = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'Username should be an email';
      }
      if (!values.pswField) {
        errors.pswError = 'Field required';
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          name="emailField"
          type="text"
          placeholder="Enter username"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailError ? <div style={{ color: 'red' }}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswError ? <div style={{ color: 'red' }}>{formik.errors.pswError}</div> : null}
        <button type="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;

import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import image1 from "../images/12.jpeg";
import { useCookies } from 'react-cookie';

// Custom Text Input Component
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input {...field} {...props} className="block w-full mt-1 p-2 border rounded shadow-sm" />
      {meta.touched && meta.error && <div className="text-sm text-red-500">{meta.error}</div>}
    </div>
  );
};

// Custom Checkbox Component
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input type="checkbox" {...field} {...props} className="mr-2 leading-tight" />
        <span className="text-sm font-medium text-gray-600">{children}</span>
      </label>
      {meta.touched && meta.error && <div className="text-sm text-red-500">{meta.error}</div>}
    </div>
  );
};

// Main Form Component
const DonateFundsForm = () => {
  const [cookies] = useCookies(['user']); 
  const userId = cookies.user[0]?.id; // Get user ID from cookies

  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={{
          name: '',
          email: '',
          amount: 0,
          currency: '',
          text: '',
          terms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(3, 'Not less than 3 symbols').required('Name Required'),
          email: Yup.string().email('Invalid email address').required('Email Required'),
          amount: Yup.number().min(5, 'Not less than 5').required('Required'),
          currency: Yup.string().required('Select currency'),
          terms: Yup.boolean().oneOf([true], 'Required').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetch(`http://127.0.0.1:5000/donateFunds/${userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: values.amount }),
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('API error:', error))
            .finally(() => setSubmitting(false));
        }}
      >
        <Form className="form p-6 bg-gray-300 rounded-lg w-2/5 shadow-md flex flex-col items-center">
          <img src={image1} alt="Logo" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl mb-4">Send Fund Donation</h2>
          
          <MyTextInput label="Your name" id="name" name="name" type="text" autoComplete="off" />
          <MyTextInput label="Your email" id="email" name="email" type="email" autoComplete="off" />

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600 mb-1">Amount</label>
            <Field id="amount" name="amount" type="number" autoComplete="off" className="block w-full mt-1 p-2 border rounded shadow-sm" />
            <ErrorMessage component="div" className="text-sm text-red-500" name="amount" />
          </div>

          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-600 mb-1">Currency</label>
            <Field id="currency" name="currency" as="select" className="block w-full mt-1 p-2 border rounded shadow-sm">
              <option value="">Select currency</option>
              <option value="RS">RS</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
            </Field>
            <ErrorMessage component="div" className="text-sm text-red-500" name="currency" />
          </div>

          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-600 mb-1">Your message</label>
            <Field id="text" name="text" as="textarea" className="block w-full mt-1 p-2 border rounded shadow-sm" />
            <ErrorMessage component="div" className="text-sm text-red-500" name="text" />
          </div>

          <MyCheckbox name="terms">Agree with privacy policy</MyCheckbox>

          <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default DonateFundsForm;
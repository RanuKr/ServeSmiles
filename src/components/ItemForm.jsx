import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import image1 from "../images/12.jpeg";
import { useCookies } from "react-cookie";

// Custom Input Component
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`block w-full mt-1 p-2 border rounded shadow-sm ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

// Custom Checkbox Component
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          {...field}
          {...props}
          className={`mr-2 leading-tight ${
            meta.touched && meta.error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <span className="text-sm font-medium text-gray-600">{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

// Main ItemForm Component
const ItemForm = () => {
  const [cookies] = useCookies(["user"]);
  const user_id = cookies.user && cookies.user.length > 0 ? cookies.user[0].id : null;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Formik
        initialValues={{
          name: "",
          email: "",
          items: "",
          text: "",
          terms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          items: Yup.string().required("Please select an item"),
          text: Yup.string().optional(),
          terms: Yup.boolean()
            .required("You must agree to the privacy policy")
            .oneOf([true], "You must agree to the privacy policy"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetch(`http://127.0.0.1:5000/donateFood/${user_id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: values.items,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              alert("Donation submitted successfully!");
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("An error occurred. Please try again.");
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4 flex justify-center">
              <img src={image1} alt="Logo" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">Send Item Donation</h2>

            {/* Name Input */}
            <MyTextInput
              label="Your name"
              id="name"
              name="name"
              type="text"
              autoComplete="off"
            />

            {/* Email Input */}
            <MyTextInput
              label="Your email"
              id="email"
              name="email"
              type="email"
              autoComplete="off"
            />

            {/* Items Dropdown */}
            <div className="mb-4">
              <label htmlFor="items" className="block text-sm font-medium text-gray-600 mb-1">
                Choose items to Donate
              </label>
              <Field
                id="items"
                name="items"
                as="select"
                className="block w-full mt-1 p-2 border rounded shadow-sm"
              >
                <option value="" disabled>
                  Select Items
                </option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Books">Books</option>
                <option value="Cleaning Supplies">Cleaning Supplies</option>
                <option value="Medical Supplies">Medical Supplies</option>
                <option value="Hygiene Products">Hygiene Products</option>
              </Field>
              <ErrorMessage
                name="items"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-600 mb-1">
                Your message
              </label>
              <Field
                id="text"
                name="text"
                as="textarea"
                className="block w-full mt-1 p-2 border rounded shadow-sm"
              />
              <ErrorMessage
                name="text"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Terms Checkbox */}
            <MyCheckbox name="terms">
              Agree with privacy policy
            </MyCheckbox>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ItemForm;
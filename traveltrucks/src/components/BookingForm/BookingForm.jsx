import css from "./BookingForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const BookingForm = () => {
  const [bookingDate, setBookingDate] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      bookingDate: Yup.date().required("Booking date is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid) {
        toast.success("Booking successful!");
        resetForm();
        setBookingDate(null);
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formik.validateForm();

    if (!formik.isValid) {
      if (formik.errors.name) {
        toast.error(formik.errors.name);
      }
      if (formik.errors.email) {
        toast.error(formik.errors.email);
      }
      if (formik.errors.bookingDate) {
        toast.error(formik.errors.bookingDate);
      }
    } else {
      formik.handleSubmit();
    }
  };

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>

        <DatePicker
          id="bookingDate"
          selected={bookingDate}
          placeholderText="Booking date*"
          onChange={(date) => {
            setBookingDate(date);
            formik.setFieldValue("bookingDate", date);
          }}
          onBlur={formik.handleBlur}
        />

        <div>
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
        </div>

        <button type="submit" className={css.sendBtn}>
          Send
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookingForm;

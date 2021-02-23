import { useState, useEffect } from "react";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    setErrors(validate(values))
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm()
    }
  }, [values, isSubmitting])

  return { handleChange, handleSubmit, values, errors, isSubmitting }
}

export default useForm
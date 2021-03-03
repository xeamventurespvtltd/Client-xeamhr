import axios from "axios";
import { useState, useEffect } from "react";

const useForm = (submitForm, validate, screenLoader) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    const formData = {}
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmitting(true)
    if (Object.keys(errors).length === 0) {
      setLoader(true)
      const data = new FormData(e.target);
      for (let key of data.keys()) {
        formData[key] = data.get(key)
      }
      axios({
        method: "post",
        url: "/api/book-a-demo",
        data: formData
      }).then((res) => {
        setResponse(res.data)
        // console.log("response form the server", res)
      })
        .catch(err => console.log("error in submitting the form"))
    } else {
      console.error("display error")
    }
  }

  useEffect(() => {
    setErrors(validate(values))
    // console.log("responseBook", response)
    if (response) {
      submitForm()
    }
    screenLoader(loader && !response)

    console.log("loader and response Bvalue", loader && !response)
  }, [values, isSubmitting, loader, response])

  return { handleChange, handleSubmit, values, errors, isSubmitting, loader, response }
}

export default useForm
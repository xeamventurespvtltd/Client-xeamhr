import axios from "axios";
import { useState, useEffect } from "react";

const useForm = (submitForm, validate, screenLoader, timing) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value
    })
  };

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

      const toUser = {
        subject: 'Mail Test book',
        content: '<html><body>Hello we are from xeam ventures, <br> Thank your for subscribing our newsletter</body><br></html>'
      }

      const toUs = {
        subject: 'Mail Test book',
        content: `<html><body>
        <p>${timing}</p>
        <p>${formData.firstName} ${formData.lastName}</p>
        <p>${formData.email}</p>
        <p>${formData.phoneNumber}</p>
        <p>${formData.companyName}</p>
        <p>${formData.timeDuration}</p>
        </body><br></html>`
      }
      axios({
        method: "post",
        url: "/api/book-a-demo",
        data: {
          email: formData.email,
          toUser,
          toUs
        }
      }).then((res) => {
        setResponse(res.data)
      })
        .catch(err => console.log("error in submitting the form"))
    } else {
      console.error("display error")
    }
  };

  useEffect(() => {
    setErrors(validate(values))
    if (response) {
      submitForm()
    }
    screenLoader(loader && !response)
  }, [values, isSubmitting, loader, response])

  return { handleChange, handleSubmit, values, errors, isSubmitting, loader, response }
}

export default useForm
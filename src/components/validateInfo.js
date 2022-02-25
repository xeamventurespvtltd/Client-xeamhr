export default function validateInfo(values) {
  let errors = {}
  // first and last name
  if (!values.firstName.trim()) {
    errors.firstName = "First Name is required"
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required"
  }

  // email
  if (!values.email) {
    errors.email = "Email is required"
  } else if (!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(values.email)) {
    errors.email = "Email is required"
  }
  // company name
  if (!values.companyName.trim()) {
    errors.companyName = "Company Name is required"
  }
  // phone numnber
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number is required"
  } else if (values.phoneNumber < 9) {
    errors.phoneNumber = "plz Enter 10 digit number"
  }

  return errors
}
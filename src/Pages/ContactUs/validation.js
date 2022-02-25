export default function validation(inputErrors) {
  let errors = {}
  if (inputErrors.first_name.trim() === "") {
    errors.first_name = "First name is required"
  } else if (inputErrors.first_name.length < 3 && inputErrors.first_name.length > 0) {
    errors.first_name = "Minimum 3 characters are required"
  }

  if (inputErrors.last_name.trim() === "") {
    errors.last_name = "Last name is required"
  } else if (inputErrors.last_name.length < 3 && inputErrors.last_name.length > 0) {
    errors.last_name = "Minimum 3 characters are required"
  }

  if (inputErrors.email.trim() === "") {
    errors.email = "Email is required"
  } else if (!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(inputErrors.email)) {
    errors.email = "please enter valid email"
  }
  if (inputErrors.company_name.trim() === "") {
    errors.company_name = "Company name is required"
  }

  return errors
}
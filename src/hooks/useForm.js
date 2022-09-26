import { useState, useEffect } from "react"

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  useEffect(() => {

  })
  const handleInputChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  return [values, handleInputChange]
}

export default useForm
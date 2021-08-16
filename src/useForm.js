import { useState } from "react";

function useForm({ initialValue, validation, onSubmit }) {
  const [initObj, setInitObj] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInitObj((pre) => {
      return {
        ...pre,
        [event.target.name]:
          typeof initObj[event.target.name] === "boolean"
            ? event.target.checked
            : event.target.value
      };
    });
  };

  const handleSubmit = () => {
    const error = validation(initObj);
    setErrors(error);
    if (Object.keys(error).length > 0) return;
    onSubmit(initObj);
  };

  return {
    handleChange,
    handleSubmit,
    values: initObj,
    errors
  };
}

export default useForm;

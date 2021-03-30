import { useState } from 'react';

const useFormInput = initialValue => {
  const [value, setvalue] = useState(initialValue);
 
  const handleChange = e => {
    setvalue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
    setvalue
  }
}
export default useFormInput;
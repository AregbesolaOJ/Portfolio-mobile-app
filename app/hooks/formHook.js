import { useEffect, useCallback } from 'react';
import { isEmpty } from '../utils';

export const useForm = (formState, setForm, validate) => {
  const form = { ...formState };

  const validateStatus = useCallback(() => {
    setForm(state => ({ ...state, invalid: validate }));
  }, [validate, setForm]);

  useEffect(() => {
    validateStatus();
  }, [validateStatus]);

  const updateForm = (value, fieldName) => {
    form[fieldName] = (fieldName === 'email' || fieldName === 'password')
      ? {
        touched: true,
        value: value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      }
      : {
        touched: true,
        value
      };
    if (validate) {
      const errors = validate(form);
      form[fieldName].error = errors[fieldName];
      if (errors[fieldName]) {
        form.invalid = true;
      }
      if (isEmpty(errors)) {
        form.invalid = false;
      }
    }
    setForm(form);
  };

  return updateForm;
};

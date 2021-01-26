import React from 'react';
import { Form, Badge } from 'react-bootstrap';

const requiredInput = (value) => (value ? undefined : 'Это поле обязательное!');
const maxLength = (max) => (value) =>
  value && value.length === max ? undefined : 'Это поле должно быть заполнено!';
const requiredPhone = maxLength(18);

const FieldInput = ({ input, meta: { touched, error, warning }, ...props }) => {
  return (
    <>
      <Badge variant="danger">
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </Badge>
      <Form.Control {...props} {...input} />
    </>
  );
};

export default FieldInput;
export { requiredInput, requiredPhone };

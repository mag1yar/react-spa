import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { Field, reduxForm } from 'redux-form';

import { FieldInput, Title } from '../components';
import { requiredInput, requiredPhone } from '../components/FieldInput';

import { addClientToDB } from '../db';

function Card(props) {
  const { handleSubmit } = props;

  return (
    <>
      <Title pageTitle="Добавить клиента" />
      <Form onSubmit={handleSubmit(addClientToDB)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Имя</Form.Label>
            <Field
              name="name"
              type="text"
              placeholder="Имя"
              component={FieldInput}
              validate={[requiredInput]}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formSurname">
            <Form.Label>Фамилия</Form.Label>
            <Field
              name="surname"
              component={FieldInput}
              type="text"
              placeholder="Фамилия"
              validate={[requiredInput]}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formMiddlename">
            <Form.Label>Отчество</Form.Label>
            <Field name="middlename" type="text" placeholder="Отчество" component={FieldInput} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formPhone">
          <Form.Label>Номер телефона</Form.Label>
          <Field
            as={InputMask}
            mask="+7 (999) 999 99 99"
            maskChar={null}
            name="phone"
            type="text"
            placeholder="Номер телефона"
            component={FieldInput}
            validate={[requiredPhone]}
          />
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Стаж работы</Form.Label>
          <Field name="experience" type="number" component={FieldInput} placeholder="Стаж работы" />
        </Form.Group>
        <Form.Group controlId="formSpecialty">
          <Form.Label>Специальность</Form.Label>
          <Field name="specialty" type="text" component={FieldInput} placeholder="Специальность" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </>
  );
}

export default reduxForm({
  form: 'addClientForm',
  onSubmitSuccess: (result, dispatch, props) => {
    console.log(props);
    const name = props.values.name;
    const surname = props.values.surname;
    alert(`Клиент «${name} ${surname}» добавлен!`);
    props.history.push('/');
  },
})(Card);

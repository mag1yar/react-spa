import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { FieldInput, Title } from '../components';
import { requiredInput, requiredPhone } from '../components/FieldInput';
import { changeClientInDB } from '../db';

function Card(props) {
  const { handleSubmit, submitting } = props;
  return (
    <>
      <Title pageTitle="Карта клиента" />
      <Form onSubmit={handleSubmit(changeClientInDB)}>
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
          <Form.Group as={Col} controlId="formMiddleName">
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
            validate={[requiredPhone]}
            placeholder=""
            component={FieldInput}
          />
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Стаж работы</Form.Label>
          <Field name="experience" type="number" component={FieldInput} />
        </Form.Group>
        <Form.Group controlId="formSpecialty">
          <Form.Label>Специальность</Form.Label>
          <Field name="specialty" type="text" component={FieldInput} />
        </Form.Group>
        <Button disabled={submitting} variant="primary" type="submit">
          Сохранить
        </Button>
      </Form>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  initialValues: state.clients.item,
});
export default connect(mapStateToProps)(
  reduxForm({
    form: 'changeClientForm',
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
      const name = props.values.name;
      const surname = props.values.surname;
      alert(`Клиент «${name} ${surname}» сохранен!`);
      props.history.push('/');
    },
  })(Card),
);
// export default reduxForm({
//   form: 'changeClientForm',
// })(Card);

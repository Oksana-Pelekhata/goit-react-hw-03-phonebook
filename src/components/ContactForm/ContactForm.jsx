import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Section, Title, StyledForm, Label, Input, Button } from "./styled"

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(3).required(),
});

export const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        addContact(values.name, values.number);
        resetForm();
    }

    return (
        <Section>
            <Title>Phonebook</Title>
            <Formik initialValues={initialValues}
      validationSchema={schema}
                onSubmit={handleSubmit}>
                <StyledForm autoComplete="off">
                <Label htmlFor="name">Name
                <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                        />
                <ErrorMessage name="name" component="div" />
                    </Label>
                    
                    <Label htmlFor="number">Number
                <Input
type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                        />
                <ErrorMessage name="number" component="div" />
                </Label>

                    <Button type="submit">Add contact</Button>
                </StyledForm>
            </Formik>
        </Section>
    )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
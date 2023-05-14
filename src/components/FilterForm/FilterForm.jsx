import PropTypes from 'prop-types';
import { Section, StyledForm, Label, Input, Title } from './styled';

export const FilterForm = ({ label, onChange, filter }) => {
  return (
    <Section>
      <Title>Contacts</Title>
      <StyledForm>
        <Label htmlFor="filter">{label}</Label>
        <Input
          type="text"
          id="filter"
          name="filter"
          onChange={onChange}
          value={filter}
        />
      </StyledForm>
    </Section>
  );
};

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
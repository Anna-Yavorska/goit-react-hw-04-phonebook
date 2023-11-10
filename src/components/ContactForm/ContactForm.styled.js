import {
  Field as ContactInfo,
  Form as FormWrapper,
  ErrorMessage as Error,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormWrapper)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid blue;
  max-width: 320px;
  padding: 12px;
`;

export const Field = styled(ContactInfo)`
  max-width: 50%;
  font-size: 20px;
  font-weight: 500;
`;

export const ErrorMessage = styled(Error)`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  max-width: 40%;
  color: blue;
`;

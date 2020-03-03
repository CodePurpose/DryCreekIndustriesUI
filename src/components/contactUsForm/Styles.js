import styled from "styled-components";
import { RedButton } from "../globalStyles";

export const FormContainer = styled.div`
  max-width: 750px;
  max-height: 350px;
  border: 1px solid white;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 10px 5px;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  margin: 10px 2px;
`;

export const StyledTextArea = styled.textarea`
  height: 100px;
  padding: 20px;
  border-radius: 4px;
`;

export const FormButton = styled(RedButton)`
  margin-top: 20px;
  align-self: center;
`;

import styled from "styled-components";

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

export const red = "#A5000C";

export const Button = styled.button`
  background-color: ${red};
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px 50px;
  max-width: 200px;
  font-weight: 600;
  color: white;
  align-self: center;

  :hover {
    cursor: pointer;
  }
`;

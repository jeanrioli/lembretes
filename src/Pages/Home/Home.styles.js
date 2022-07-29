import styled from "styled-components";

export const Main = styled.main`
  background: #fff;
  padding: 20px;
  min-height: calc(100vh - 5rem);

  @media screen and (min-width: 600px) {
    margin: auto;
    width: 90%;
  }

  @media screen and (min-width: 900px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const SectionAddReminder = styled.section`
  h2 {
    margin-bottom: 1rem;
    border-bottom: solid #000 1px;
  }
`;

export const FormAddReminder = styled.form`
  margin: auto;
  width: 100%;

  fieldset {
    border: none;
    width: 100%;
    padding: 0.8rem;
  }

  label {
    width: 100%;
    display: inline-block;
    color: #2b4052;
    font-weight: 500;

    :first-child {
      margin-bottom: 0.8rem;
    }

    @media screen and (min-width: 610px) {
      display: inline;
      margin-right: 0.8rem;
    }
  }

  input[type="text"] {
    width: 12rem;
  }

  input {
    background: #ced6b0;
    border: none;
    padding: 0.3rem;
    margin-left: 0.6rem;

    ::placeholder {
      color: #6c6a61;
      font-size: 0.8rem;
    }
  }

  textarea {
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const MessageError = styled.span`
  margin-right: 0.4rem;
  color: red;
  font-size: 1rem;
`;

export const ButtonAddReminder = styled.button`
  background: #b8c338;
  color: #fff;
  padding: 0.3rem;
  font-weight: 500;

  :hover {
    background: #d9cc34;
  }

  :active {
    background: #b8c338;
  }
`;

export const SectionMyReminders = styled.section`
  margin-top: 1rem;

  h2 {
    border-bottom: solid #000 1px;
  }

  article:not(:nth-child(2)) {
    border-top: solid #000 1px;
  }
`;

export const ReminderCard = styled.article`
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.6rem 0;
`;

export const ReminderDate = styled.div`
  background-color: #3e475e;
  width: 4rem;
  text-align: center;
  padding: 0.3rem;

  span {
    width: 100%;
    display: block;
  }

  span:first-child {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span:last-child {
    font-size: 0.8rem;
  }
`;

export const ReminderText = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  h3 {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
  }

  div,
  ol {
    width: 100%;
  }

  li {
    display: flex;
    flex-wrap: nowrap;
    padding: 0.2rem;
  }

  li:nth-child(2n) {
    background: #e0e0e0;
  }

  li h3:first-child {
    width: 90%;
    color: #2b4052;
  }

  li span:nth-child(2) {
    width: 10%;
    text-align: center;
  }
`;

export const ButtonRemoveReminder = styled.button`
  img {
    height: 1.3rem;
    width: auto;
  }
`;

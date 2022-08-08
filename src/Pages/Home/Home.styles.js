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

export const LightScreen = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  opacity: 0.3;
  top: 0;
  left: 0;
  position: fixed;
  display: ${(props) => (props.openedDialog ? "block" : "none")};
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

    @media screen and (min-width: 615px) {
      display: inline;
      margin-right: 0.8rem;
    }
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
    align-items: center;
    flex-wrap: nowrap;
    padding: 0.2rem;
  }

  li:nth-child(2n) {
    background: #e0e0e0;
  }

  li h3:first-child {
    width: 84%;
    padding-right: 1rem;
    color: #2b4052;

    @media screen and (min-width: 500px) {
      width: 90%;
    }
  }

  li span:nth-child(2) {
    width: 8%;

    @media screen and (min-width: 500px) {
      width: 5%;
    }
  }

  li span:nth-child(3) {
    width: 8%;

    @media screen and (min-width: 500px) {
      width: 5%;
    }
  }
`;

export const ButtonOpenDialog = styled.button`
  img {
    height: 1rem;
    width: auto;
  }
`;

export const ButtonRemoveReminder = styled.button`
  img {
    height: 1.3rem;
    width: auto;
  }
`;

export const DialogUpdateReminder = styled.dialog`
  background: #ced6b0;
  border: 1px solid #3e475e;
  margin: auto;
  width: 90%;
  min-height: 10%;
  position: fixed;
  top: 30%;
  padding: 0.5rem;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (min-width: 900px) {
    width: 60%;
  }

  @media screen and (min-width: 1400px) {
    width: 40%;
  }
`;

export const ButtonUpdateReminder = styled.button`
  background: #e6b40f;
  padding: 0.3rem;
  color: #fff;
  font-weight: 500;
`;

export const FormUpdateReminder = styled.form`
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

  input {
    background: #fff;
  }

  textarea {
    width: 100%;
  }
`;

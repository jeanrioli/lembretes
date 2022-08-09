import React, { useEffect, useState } from "react";
import {
  FormAddReminder,
  ButtonAddReminder,
  ButtonCancelUpdate,
  ButtonUpdateReminder,
  ButtonRemoveReminder,
  ButtonOpenDialog,
  DialogUpdateReminder,
  FormUpdateReminder,
  LightScreen,
  SectionAddReminder,
  ReminderDate,
  ReminderCard,
  ReminderText,
  Main,
  MessageError,
  SectionMyReminders,
} from "./Home.styles";
import api from "../../services/api";

const Home = () => {
  const [remindersList, setRemindersList] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [today, setToday] = useState("");
  const [error, setError] = useState("");
  const [openedDialog, setOpenedDialog] = useState(false);
  const [reminderToUpdate, setReminderToUpdate] = useState();
  const [updateName, setUpdateName] = useState("");
  const [updateDate, setUpdateDate] = useState("");

  useEffect(() => {
    showReminders();
    getToday();
  }, []);

  function getToday() {
    setToday(new Date().toISOString().substring(0, 10));
  }

  function getSortedUniqueDates() {
    const uniqueDates = [
      ...new Set(remindersList.map((reminder) => reminder.date)),
    ];
    const sortedDates = uniqueDates.sort((a, b) => new Date(a) - new Date(b));
    return sortedDates;
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleUpdateName(event) {
    setUpdateName(event.target.value);
  }

  function handleUpdateDate(event) {
    setUpdateDate(event.target.value);
  }

  function showReminders() {
    api
      .get("/reminders")
      .then((response) => setRemindersList(response.data))
      .catch((err) => {
        console.error("Erro" + err);
      });
  }

  function addReminder() {
    if (name !== "" && date > today) {
      clearStates();
      let newReminder = { name, date };
      api
        .post("/reminders", newReminder)
        .then((response) => setRemindersList(response.data))
        .catch((err) => {
          console.error("erro" + err);
        });
    } else {
      setError("Entrada inválida");
    }
  }

  function deleteReminder(id) {
    api
      .delete(`/reminders/${id}`)
      .then((response) => setRemindersList(response.data))
      .catch((err) => {
        console.error("erro", +err);
      });
  }

  function openDialogUpdate(id) {
    setOpenedDialog(!openedDialog);
    if (!openedDialog) {
      setReminderToUpdate(id);
      setUpdateName(remindersList.find((reminder) => reminder.id === id).name);
      setUpdateDate(remindersList.find((reminder) => reminder.id === id).date);
    } else {
      clearStates();
    }
    document.body.style.overflow = openedDialog ? "auto" : "hidden";
  }

  function updateReminder() {
    if (updateName !== "" && updateDate > today) {
      let newReminderData = {
        name: updateName,
        date: updateDate,
        id: reminderToUpdate,
      };
      api
        .put(`/reminders`, newReminderData)
        .then((response) => setRemindersList(response.data))
        .catch((err) => {
          console.error("erro", +err);
        });
      closeDialog();
      clearStates();
    }
  }

  function closeDialog() {
    setOpenedDialog(false);
  }

  function clearStates() {
    setName("");
    setDate("");
    setError("");
  }

  function getDay(reminderDate) {
    const fullDate = reminderDate.split("-");
    return fullDate[2];
  }

  function getMonthAndYear(reminderDate) {
    const fullDate = reminderDate.split("-");
    const months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "maio",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];
    return months[+fullDate[1] - 1] + "/" + fullDate[0].substring(2);
  }

  return (
    <Main>
      <LightScreen onClick={openDialogUpdate} openedDialog={openedDialog} />
      <SectionAddReminder>
        <h2>Adicionar lembrete</h2>
        <FormAddReminder>
          <fieldset>
            <label>
              Lembrar de
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="ex: Reservar salão de festas"
                title="texto do lembrete"
              />
            </label>
            <label>
              No dia
              <input
                type="date"
                value={date}
                min={today}
                onChange={handleDate}
                title="data do lembrete"
              />
            </label>
          </fieldset>
          <div>
            <MessageError>{error}</MessageError>
            <ButtonAddReminder
              type="button"
              onClick={addReminder}
              title="adicionar novo lembrete"
            >
              Criar lembrete
            </ButtonAddReminder>
          </div>
        </FormAddReminder>
      </SectionAddReminder>
      <SectionMyReminders>
        <h2>Meus lembretes</h2>
        {getSortedUniqueDates().map((reminderDate) => (
          <ReminderCard key={reminderDate}>
            <ReminderDate>
              <span>{getDay(reminderDate)}</span>
              <span>{getMonthAndYear(reminderDate)}</span>
            </ReminderDate>
            <ReminderText>
              <ol>
                {remindersList.map(
                  (reminder) =>
                    reminder.date === reminderDate && (
                      <li key={reminder.id}>
                        <h3>{reminder.name}</h3>
                        <span>
                          <ButtonOpenDialog
                            onClick={() => openDialogUpdate(reminder.id)}
                            title="editar este lembrete"
                          >
                            <img
                              src="/pencil-svgrepo-com.svg"
                              alt="ícone lápis"
                            />
                          </ButtonOpenDialog>
                        </span>
                        <span>
                          <ButtonRemoveReminder
                            onClick={() => deleteReminder(reminder.id)}
                            title="remover este lembrete"
                          >
                            <img src="/trash-icon.svg" alt="ícone lixeira" />
                          </ButtonRemoveReminder>
                        </span>
                      </li>
                    )
                )}
              </ol>
            </ReminderText>
          </ReminderCard>
        ))}
      </SectionMyReminders>
      <DialogUpdateReminder open={openedDialog}>
        <FormUpdateReminder>
          <h3>Atualizar lembrete</h3>
          <fieldset>
            <label>
              Lembrar de
              <input
                type="text"
                value={updateName}
                onChange={handleUpdateName}
              />
            </label>
            <label>
              No dia
              <input
                type="date"
                min={today}
                value={updateDate}
                onChange={handleUpdateDate}
              />
            </label>
          </fieldset>
          <div>
            <ButtonCancelUpdate type="button" onClick={closeDialog}>
              Cancelar
            </ButtonCancelUpdate>
            <ButtonUpdateReminder type="button" onClick={updateReminder}>
              Atualizar
            </ButtonUpdateReminder>
          </div>
        </FormUpdateReminder>
      </DialogUpdateReminder>
    </Main>
  );
};

export default Home;

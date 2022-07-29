import React, { useEffect, useState } from "react";
import {
  FormAddReminder,
  ButtonAddReminder,
  ButtonRemoveReminder,
  SectionAddReminder,
  ReminderDate,
  ReminderCard,
  ReminderText,
  Main,
  MessageError,
  SectionMyReminders,
} from "./Home.styles";

const exampleReminders = [
  {
    id: 0,
    date: "2022-08-08",
    name: "Enviar contrato para representante da empresa",
  },
  {
    id: 1,
    date: "2022-08-07",
    name: "Verificar o status das entregas",
  },
  {
    id: 2,
    date: "2022-08-08",
    name: "Reunir com o diretor de Marketing",
  },
];

const Home = () => {
  const [remindersList, setRemindersList] = useState(exampleReminders);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [today, setToday] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const day = new Date();
    setToday(day.toISOString().substring(0, 10));
  }, []);

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

  function generateId() {
    if (remindersList.length === 0) {
      return 1;
    } else {
      const lastId = remindersList.find(
        (reminder, index) => index === remindersList.length - 1
      ).id;
      return lastId + 1;
    }
  }

  function addReminder() {
    const newRemindersList = [...remindersList];

    if (name !== "" && date > today) {
      newRemindersList.push({ name, date, id: generateId() });
      setRemindersList(newRemindersList);
      getSortedUniqueDates();
      setName("");
      setDate("");
      setError("");
    } else {
      setError("Entrada inválida");
    }
  }

  function deleteReminder(id) {
    setRemindersList(remindersList.filter((reminder) => reminder.id !== id));
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
    </Main>
  );
};

export default Home;

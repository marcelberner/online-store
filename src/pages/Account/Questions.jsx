import SubmitButton from "../../components/Button/SubmitButton";
import { useSelector } from "react-redux";
import { useRef } from "react";

import useData from "../../hooks/useData";

import "./Questions.scss";

const Questions = () => {
  const token = useSelector((state) => state.userAuth.token);
  const { dataRequest } = useData();

  const topic = useRef();
  const description = useRef();

  const sendMessageHandler = (event) => {
    event.preventDefault();

    dataRequest({
      method: "POST",
      database: "messages",
      body: {
        userId: token,
        topic: topic.current.value,
        description: description.current.value,
      },
    });

    topic.current.value = "";
    description.current.value = "";
  };

  return (
    <section className="questions">
      <h1 className="questions__header">Skontaktuj się z nami</h1>
      <form className="questions__form">
        <input
          type={"text"}
          className="questions__input"
          placeholder="Temat"
          ref={topic}
        />
        <textarea
          className="questions__input questions__input--textarea"
          placeholder="Wiadomość"
          ref={description}
        />
        <SubmitButton
          text={"wyślij"}
          size={"medium"}
          action={sendMessageHandler}
        />
      </form>
    </section>
  );
};

export default Questions;

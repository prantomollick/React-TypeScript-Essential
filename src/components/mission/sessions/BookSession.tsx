import { FormEvent, useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../ui/Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";
import type { Session } from "../../../store/sessions-context";

type BookSessionProps = {
  session: Session;
  onDone: () => void; //onDone will "tell" the parent component that the BookSession component should be removed from the DOM
};

function BookSession({ session, onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fromData = new FormData(event.currentTarget);
    const data = Object.fromEntries(fromData);

    console.log(data);

    onDone();
  };

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BookSession;

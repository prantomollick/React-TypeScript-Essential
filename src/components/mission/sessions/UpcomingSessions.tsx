import { useEffect, useRef } from "react";
import type { ModalHandle } from "../ui/Modal";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

type UpcomingSessionsProps = {
  onClose: () => void; //onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    //
  }

  const hasSessions = false;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {/* hassessions */}

      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}

export default UpcomingSessions;

import React, { useState } from 'react';
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const QuizTimer = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const viewResult = () => history.push("/result");

  return (
    <>
      <Timer
        initialTime={60000 * 0.2}
        direction="backward"
        checkpoints={[
          {
            time: 60000 * 0,
            callback: toggle
          }
        ]}
      >
        {() => (
          <React.Fragment>
            <h2>Timer:{" "}<Badge color="secondary"><Timer.Minutes />:<Timer.Seconds /></Badge>{" "}mins left....</h2>
          </React.Fragment>
        )}
      </Timer>

      <div>
      <Modal isOpen={modal} toggle={toggle} backdrop={'static'} keyboard={true}>
        <ModalHeader toggle={toggle}>Finish</ModalHeader>
        <ModalBody>
          Times up...
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={viewResult}>View Result</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  );
};

export default QuizTimer;

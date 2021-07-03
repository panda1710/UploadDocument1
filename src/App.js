
import Modal from "react-modal";
import React, { useState } from "react";
import './App.css';
function App(){
  const [modalOpen, setModalOpen] = useState(true);
  if (modalOpen) {
    return (
      // widget
      <div className="App">
        <Modal isOpen={modalOpen}>
          <h1>Widget</h1>
          <h2>Please Upload your Documents</h2>
          <p>Click the button to upload </p>
          {/* form */}
          <form>
            <input type="file" name="picture"></input>
            <button onClick={() => setModalOpen(false)}>
              Upload Document
            </button>
          </form>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1> Document Successfully Uploded</h1>
      </div>
    );
  }
}
export default App;

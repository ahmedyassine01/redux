import React, { useState } from 'react';
import {handlEdit} from "../redux/action";
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

 export function Edit({item}) {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [text,setText] = useState(item.task)
  const dispatch=useDispatch();
  const handlSubmit=(e)=>{
    e.preventDefault();
    const editedTask={
        id:item.id,task:text,isDone:item.isDone
    };
    dispatch(handlEdit(editedTask))
    closeModal()
  }
  

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <form onSubmit={handlSubmit} >
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <div>
                <button onClick={closeModal}>Cancel</button>
                <button type='submit'>Confirme</button>
            </div>
        </form>
      </Modal>
    </div>
  );
}
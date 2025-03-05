import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Modal } from './components/Modal'
import { useState } from 'react'
function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [users, setUsers] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  const addUser = (userData) => {
    const newUser = { ...userData, id: Date.now() }
    setUsers((prevUsers) => [...prevUsers, newUser])
    closeModal()
  };

  return (
    <div>
      <Header
        openModal={openModal}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setSearchQuery={setSearchQuery}
      />
      <Main
        users={users}
        setUsers={setUsers}
        isChecked={isChecked}
        searchQuery={searchQuery} 
      />
      {isOpenModal && <Modal onClose={closeModal} onSubmit={addUser} />}
    </div>
  );
}

export default App

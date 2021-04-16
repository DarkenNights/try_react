import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [clients, setClients] = useState(
      [
        {id: 1, name: 'Thomas Lenormand'},
        {id: 2, name: 'Pauline Lenormand'},
        {id: 3, name: 'Nathan Lenormand'},
        {id: 4, name: 'Olivia Lenormand'}
      ]
  )
  const [newClient, setNewClient] = useState('')

  const handleDelete = id => {
    const updatedClient = [...clients]
    const index = clients.findIndex(client => client.id === id)
    updatedClient.splice(index, 1)

    setClients(updatedClient)
  }

  const handleAdd = (client) => {
    const updatedClient = [...clients]
    updatedClient.push({id: new Date().getTime(), name: newClient})

    setClients(updatedClient)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd({id: new Date().getTime(), name:newClient})

    setNewClient('')
  }

  const handleChange = (event) => {
    setNewClient(event.target.value)
  }

  return (
    <div>
      <ul>
        {clients.map(client => {
          return <li key={client.id}>{client.name} <button onClick={() => handleDelete(client.id)}>X</button></li>
        })}
      </ul>
      <form>
        <input type='text' value={newClient} onChange={handleChange} placeholder="Taper le nom d'un client" /><button onClick={handleSubmit}>Ajouter</button>
      </form>
    </div>
  );
}

export default App;

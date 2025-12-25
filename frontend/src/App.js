import Templates from './pages/Templates'
import Contacts from './pages/Contacts'
import SendEmail from './pages/SendEmail'
import './App.css';

function App() {
  return (
    <>
    <div className='templates-and-contacts-section-container'>
      <Templates />
      <hr />
      <Contacts />
    </div>
    <hr />
    <SendEmail />
    </>
  )
}

export default App;

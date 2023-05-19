import Bttn_turnDarkMode from './components/Bttn_turnDarkMode'
import Modal_default from './components/Modal_default'
import Form_simple from './components/Form_simple'
import Form_login from './components/Form_login'
import handleModal from './utils/handleModal'

document.onkeydown = ({ key }) => { if(key === 'Escape') handleModal() } // Fechar modal quando apertar Esc

export default () => (
   <div id='container-mode' className='light'>
      <Bttn_turnDarkMode />

      <Form_login miniText={{onclick: () => handleModal(true)}} title='Bra Parking login'/>

      <Modal_default close={handleModal}>   <Form_simple />    </Modal_default>
   </div> )

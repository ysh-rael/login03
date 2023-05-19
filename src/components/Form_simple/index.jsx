import alterClass from '../../utils/alterClass';
import Bttn_default from '../Bttn_default';
import Inpt_default from '../Inpt_default';

function checkCode() { 
  // code here...
  const isValid = false // resultado de um script de verificação do código digitado.
  alterClass({ test: isValid, selector: '.Modal_default', classCSS: 'closed' }) 
}

export default function ({onClick, children}) {
    return <>
    {
         ( !children && (
          <form className='Form_simple'>
        <div>Um código foi mandado para o Número 996****75</div> <br/>
        <Inpt_default minLength={6} maxLength={6} label={'Digite seu código'} onKeyPress={true}/>
        <div className='box-Bttn_default'>
          <Bttn_default onClick={ onClick ? onClick : () => checkCode() } label ='Verificar' />
        </div>
      </form>
        )) || (children && (
          <form className='Form_simple'>
              {children}
          </form>
        ))
    }
    </>
        
    
}
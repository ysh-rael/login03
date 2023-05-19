import './style.css'
import Bttn_neon from '../Bttn_neon'
import Inpt_default from '../Inpt_default'

export default function ({input, title, check, action, method, bttn, miniText}) {

    return (
        <form className='Form_login' method={method} action={action}>
            
        <fieldset>
        <div className='title'>{title}</div>
        { 
            !input && (
                <>
                <Inpt_default type='text' label='Nome' onKeyPress={true} />
                <Inpt_default type='password' label='Senha  ' onKeyPress={true} minLength={8} />
                </>
            ) || input && <>{[input]}</> 
        }

        {
            !check &&  <label className='label-checkbox' > <input type="checkbox" name="" id="" value={'permanecer conectado'} /> Permanecer conectado </label> ||
            check && check.value && check.label && <label className='label-checkbox' > <input type="checkbox" name="" id="" value={check.value} /> {check.label} </label>
        }
        <small><a href={ miniText && miniText.href ? miniText.href : '#' } onClick={miniText && miniText.onclick ? miniText.onclick : ()=> null} >{ miniText && miniText.label ? miniText.label : 'Esqueceu a senha' }</a></small>

         <Bttn_neon label={ bttn ? bttn : 'Enter' }/> <br/>

        
        </fieldset>
      </form>
    )
}
import './style.css'
import Bttn_close from '../Bttn_close/'

export default function ({children, id, close}) {
    return (
        <div className="Modal_default closed" id={id}>
            <div className="container">
                <Bttn_close onClick={close}/>
                <div className='box'> {children} </div>
            </div>
        </div>
    )
}
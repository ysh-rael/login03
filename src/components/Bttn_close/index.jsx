import './style.css'
export default ({onClick}) => <div className='Bttn_close'> <img src="./close.svg" onClick={ () => onClick ? onClick(false) : false }/> </div>

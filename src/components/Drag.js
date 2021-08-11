import '../style/boats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater } from '@fortawesome/free-solid-svg-icons'

const Drag = () => {
    return ( 
        <div>
            <h2>Arrastra y pega</h2>
            <p>Arrastra una de las casillas y pegala en el tablero</p>
            <div className="container-drag">
                <div className="square submarino drag" draggable></div>
                <div className="square square-left drag" draggable></div>
                <div className="square square-middle drag" draggable></div>
                <div className="square square-right drag" draggable></div>
                <div className="drag" draggable><FontAwesomeIcon icon={faWater} size="2x"/></div>
            </div>
        </div>
     );
}
 
export default Drag;
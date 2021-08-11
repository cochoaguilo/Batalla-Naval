import "../style/boats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater } from '@fortawesome/free-solid-svg-icons'


const Boats = () => {
  return (
    <div className="container-boats">
      <h2>Botes</h2>
      <div>
        <h3>Submarinos</h3>
        <div className="boats">
          <div className="square submarino"></div>
          <div className="square submarino"></div>
          <div className="square submarino"></div>
          <div className="square submarino"></div>
        </div>
      </div>
      <div>
        <h3>Destructores</h3>
        <div className="boats">
          <div className="container-destructor">
            <div className="square square-left"></div>
            <div className="square square-right"></div>
          </div>
          <div className="container-destructor">
            <div className="square square-left"></div>
            <div className="square square-right"></div>
          </div>
          <div className="container-destructor">
            <div className="square square-left"></div>
            <div className="square square-right"></div>
          </div>
        </div>
      </div>
      <div>
        <h3>Cruceros</h3>
        <div className="boats">
          <div className="container-cruceros">
            <div className="square square-left"></div>
            <div className="square square-middle"></div>
            <div className="square square-right"></div>
          </div>
          <div className="container-cruceros">
            <div className="square square-left"></div>
            <div className="square square-middle"></div>
            <div className="square square-right"></div>
          </div>
        </div>
      </div>
      <div>
        <h3>Acorazado</h3>
        <div className="boats">
          <div className="container-acorazado">
            <div className="square square-left"></div>
            <div className="square square-middle"></div>
            <div className="square square-middle"></div>
            <div className="square square-right"></div>
          </div>
        </div>
      </div>
      <div>
          <h3>Agua</h3>
          <div><FontAwesomeIcon icon={faWater}/></div>
      </div>
    </div>
  );
};

export default Boats;

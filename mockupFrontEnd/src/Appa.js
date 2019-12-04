import React from 'react';
// import logo from './logo.svg';
import statusButton1 from './resources/img/ButtonP1.png';
import statusButton2 from './resources/img/ButtonP2.png';
import statusButton3 from './resources/img/ButtonP3.png';
import statusButton4 from './resources/img/ButtonP4.png';
import statusButton5 from './resources/img/ButtonP5.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button> aaa </button> <span>  APP DE PONTO </span>
      </header>

      <div className="InfoDateHour">
        <br>
        </br>

        <span> 00 de XXXX de 0000 </span>

        <br>
        </br>

        <span> 00:00:00 </span>

        <br>
        </br>
        <br>
        </br>
      </div>

      <div className="IconConfirm">
        <img src={statusButton1} className="App-logo" alt="statusButton1" />
        <img src={statusButton2} className="App-logo" alt="statusButton1" />
        <img src={statusButton3} className="App-logo" alt="statusButton1" />
        <img src={statusButton4} className="App-logo" alt="statusButton1" />
        <img src={statusButton5} className="App-logo" alt="statusButton1" />
      </div>

      <br>
      </br>

      <div className="InfoRegister">
        <p> <span> Entrada </span> 00:00 </p>
        <p> <span> Intervalo </span> 00:00 </p>
        <p> <span> Retorno </span> 00:00 </p>
        <p> <span> Saida </span> 00:00 </p>
      </div>

    </div>
  );
}

export default App;

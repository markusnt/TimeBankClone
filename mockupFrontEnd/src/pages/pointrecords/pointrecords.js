// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import DatePicker from "react-datepicker";
// import { registerLocale, setDefaultLocale } from "react-datepicker";
// import { pt } from 'date-fns/locale'


// import "react-datepicker/dist/react-datepicker.css";

// import statusButton1 from '../../resources/img/ButtonP1.png';
// import statusButton2 from '../../resources/img/ButtonP2.png';
// import statusButton3 from '../../resources/img/ButtonP3.png';
// import statusButton4 from '../../resources/img/ButtonP4.png';
// import statusButton5 from '../../resources/img/ButtonP5.png';
// import menuIcon from './resources/img/menu_icon.svg';

// import './App.css';

// registerLocale('pt', pt)

// class Pointrecords extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true,
//             index: 0,
//             startDate: new Date(),
//             dataInicio: '',
//             ponto1: '',
//             ponto2: '',
//             ponto3: '',
//             ponto4: '',
//         };

//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//         this.restart = this.restart.bind(this)
//     }

//     handleChange = date => {
//         this.setState({
//             startDate: date
//         });
//     };

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     restart() {
//         console.log("fodasedeu");
//         console.log(this.state.index);
//         console.log(this.state.startDate)

//         if (this.state.index < 4) {
//             if (this.state.index === 0) {
//                 this.setState({
//                     ponto1: this.state.index + 1,
//                 });
//             } else if (this.state.index === 1) {
//                 this.setState({
//                     ponto2: this.state.index + 1,
//                 });
//             } else if (this.state.index === 2) {
//                 this.setState({
//                     ponto3: this.state.index + 1,
//                 });
//             } else {
//                 this.setState({
//                     ponto4: this.state.index + 1,
//                 });
//             }
//             this.setState({
//                 index: this.state.index + 1,
//             });
//         } else {
//             this.setState({
//                 index: this.state.index - 4,
//             });
//         }
//     }

//     renderMesa() {
//         if (this.state.index === 1) {
//             return <img src={statusButton2} className="App-logo" alt="statusButton2"/>
//         } else if (this.state.index === 2) {
//             return <img src={statusButton3} className="App-logo" alt="statusButton3"/>
//         } else if (this.state.index === 3) {
//             return <img src={statusButton4} className="App-logo" alt="statusButton4"/>
//         } else if (this.state.index === 4) {
//             return <img src={statusButton5} className="App-logo" alt="statusButton5"/>
//         } else {
//             return <img src={statusButton1} className="App-logo" alt="statusButton1" />
//         }

//     }

//     render() {
//         const imageClick = () => {
//             console.log('Click');
//           } 
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={menuIcon} alt="iconmenu" />
//                 </header>

//                 <div className="InfoDateHour">
//                     <br>
//                     </br>

//                     <DatePicker
//                         disabled
//                         locale="pt"
//                         dateFormat="d MMMM, yyyy"
//                         selected={this.state.startDate}
//                     />

//                     <br>
//                     </br>

//                     <DatePicker
//                         disabled
//                         showTimeSelect
//                         locale="pt"
//                         timeFormat="HH:mm:ss"
//                         timeIntervals={15}
//                         timeCaption="time"
//                         dateFormat="hh:mm:ss"
//                         selected={this.state.startDate}
//                     />

//                     <br>
//                     </br>
//                     <br>
//                     </br>
//                 </div>

//                 <div onClick={this.restart}>
//                     {this.renderMesa()}
//                 </div>



//                 {/* <div className="IconConfirm" type="button" onClick={this.handleClick}>
//                     {this.state.isToggleOn ? <img src={statusButton1} className="App-logo" alt="statusButton1" /> :
//                         <img src={statusButton2} className="App-logo" alt="statusButton1" />}

//                     {this.state.isToggleOn ? <img src={statusButton2} className="App-logo" alt="statusButton1" /> :
//                         <img src={statusButton3} className="App-logo" alt="statusButton1" />}

//                     {this.state.isToggleOn ? <img src={statusButton3} className="App-logo" alt="statusButton1" /> :
//                         <img src={statusButton4} className="App-logo" alt="statusButton1" />}
//                 </div> */}

//                 {/* <div className="IconConfirm" type="button" onClick={this.restart}>
//                     <img src={statusButton1} className="App-logo" alt="statusButton1" />
//                     <img src={statusButton2} className="App-logo" alt="statusButton1" />
//                     <img src={statusButton3} className="App-logo" alt="statusButton1" />
//                     <img src={statusButton4} className="App-logo" alt="statusButton1" />
//                     <img src={statusButton5} className="App-logo" alt="statusButton1" />
//                 </div> */}

//                 <br>
//                 </br>

//                 <div className="InfoRegister">
//                     <p> <span> Entrada </span> {this.state.ponto1} </p>
//                     <p> <span> Intervalo </span> {this.state.ponto2} </p>
//                     <p> <span> Retorno </span> {this.state.ponto3} </p>
//                     <p> <span> Saida </span> {this.state.ponto4} </p>
//                 </div>

//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// export default Pointrecords;

import React from 'react';
import './App.css';
import Car from './Components/Car.js';


function App() {

  let [animateSide, setAnimateSide] = React.useState(false);
  let [speedCar, setSpeedCar] = React.useState(0);

  let animation1 = {
    animation: 'car2 ' + speedCar + 's infinite linear'
  };
  let animation2 = {
    animation: 'car3 ' + speedCar + 's infinite linear'
  };
  let animation3 = {
    animation: 'car4 ' + speedCar + 's infinite linear'
  };
  let lvl = 1;


  const playGame = () => {
    setAnimateSide(true)
    if (lvl == 1) {
      setSpeedCar(8)
    }
  }

  const stopGame = () => {
    setAnimateSide(false)
    setSpeedCar(0)
  }

  return (
    <div className="App">
      <section className='game-wrapper'>
        <div className='track'>
          <div className="line-left">
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`} />
          </div>

          <Car animateSide/>
          
          <div className="car car2">
            <img src="img/Car.svg" alt="" className={`${animateSide ? 'animate-car imgCar imgCar2' : 'imgCar imgCar2'}`} style={animation1} />
          </div>
          <div className="car car3">
            <img src="img/Car.svg" alt="" className={`${animateSide ? 'animate-car2 imgCar imgCar3' : 'imgCar imgCar3'}`} style={animation2} />
          </div>
          <div className="car car4">
            <img src="img/Car.svg" alt="" className={`${animateSide ? 'animate-car2 imgCar imgCar4' : 'imgCar imgCar4'}`} style={animation3} />
          </div>
          <div className="line-right">
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
            <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`} />
          </div>
        </div>
        <div className='display'>
          <div className="score-block">
            <p className="score">SCORE:</p>
            <p className="score-text">0</p>
            <p className="hi-score">HI-SCORE:</p>
            <p className="hi-score-text">0</p>
            <p className="speed">SPEED:</p>
            <p className="speed-text">1</p>
            <p className="level">LEVEL:</p>
            <p className="level-text">1</p>
          </div>
          <section className='menu'>
            <div id="menu-start" className="menu-btn" onClick={playGame} >START</div>
            <div className='menu-btn' onClick={stopGame} >STOP</div>
          </section>
          <div className="info-block">
            <div className="info-block-inner">
              <img src="img/ArrowUp.svg" alt="" />
              <p>MOVE UP</p>
            </div>
            <div className="info-block-inner">
              <img src="img/ArrowDown.svg" alt="" />
              <p>MOVE DOWN</p>
            </div>
            <div className="info-block-inner">
              <img src="img/ArrowRight.svg" alt="" />
              <p>MOVE RIGHT</p>
            </div>
            <div className="info-block-inner">
              <img src="img/ArrowLeft.svg" alt="" />
              <p>MOVE LEFT</p>
            </div>
          </div>
        </div>
        <div className="controls-line"></div>
        <div className="controls">
          <div className="control-btn btn-up" >
            <img src="img/ArrowUp.svg" alt="" />
          </div>
          <div className="control-btn btn-down">
            <img src="img/ArrowDown.svg" alt="" />
          </div>
          <div className="control-btn btn-right">
            <img src="img/ArrowRight.svg" alt="" />
          </div>
          <div className="control-btn btn-left">
            <img src="img/ArrowLeft.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


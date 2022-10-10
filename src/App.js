import React from 'react';
import './App.css';

function App() {

  const  [animateSide, setAnimateSide] = React.useState(false);

  return (
    <div className="App">
      <section className='game-wrapper'>
          <div className='track'>
            <div className="line-left">
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side leftOne' : 'leftOne'}`}/>
            </div>
            <div className="car car1">
              <img src="../img/Car.svg" alt="" className='imgCar imgCar1'/>
            </div>
            <div className="car car2">
              <img src="img/Car.svg" alt="" className='imgCar imgCar2'/>
            </div>
            <div className="car car3">
              <img src="img/Car.svg" alt="" className='imgCar imgCar3'/>
            </div>
            <div className="line-right">
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
              <img src="img/Line.svg" alt="" className={`${animateSide ? 'animate-side rightOne' : 'rightOne'}`}/>
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
              <div className="menu-btn" onClick={() => setAnimateSide(true)} >START</div>
              <div className='menu-btn' onClick={() => setAnimateSide(false)} >STOP</div>
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
              <div className="control-btn btn-up">
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

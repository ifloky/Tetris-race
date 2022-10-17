import React from "react";

function Car(props) {
  let [coordinateX, setCoordinateX] = React.useState(7.2);
  let [coordinateY, setCoordinateY] = React.useState(27);
  let positionMyCar;

if (props.animateSide) {
    document.addEventListener('keydown', (event)=>{
    
      if (event.key === 'ArrowRight' && coordinateX < 9) {
        setCoordinateX( coordinateX += 1.8)
      }
      else if (event.key === 'ArrowLeft' & coordinateX > 0) {
        setCoordinateX( coordinateX -= 1.8)
      }
    
      if (event.key === 'ArrowUp' && coordinateY > 0) {
        setCoordinateY( coordinateY -= 1.8)
      }
      else if (event.key === 'ArrowDown' && coordinateY < 28) {
        setCoordinateY( coordinateY += 1.8)
      }
    
  })
}

  positionMyCar = {
    left: coordinateX + 'vw',
    top: coordinateY + 'vw'
  }

return (
  <div className="car car1" id="myCar" style={positionMyCar}>
            <img src="../img/Car.svg" alt="" className='imgCar imgCar1' />
          </div>
)}

export default Car;

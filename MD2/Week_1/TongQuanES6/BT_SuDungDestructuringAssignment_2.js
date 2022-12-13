function detectCollision(objects, point) {


  // for (let i = 0; i < objects.length; i++) {

  //   let {x, y} = objects[i]

  //  // let object = objects[i]
  //   if (point.x >= x && point.x <= object.x + object.width &&
  //     point.y >= object.y && point.y <= object.y + object.height)
  //     return object
  
  // }


  let {x, y} = point;

  return objects.find(object => {
     
    if(x >= object.x && x <= object.x + object.width && y >= object.y && y <= object.y + object.height) {
      return object
    }
  })
}
const myObjects = [
  { x: 10, y: 20, width: 30, height: 30 },
  { x: -40, y: 20, width: 30, height: 30 },
  { x: 0, y: 0, width: 10, height: 5 }
]

let [a,b,c] = myObjects;

console.log(detectCollision(myObjects, { x: 4, y: 2 }))
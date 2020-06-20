// 디스패치될 될 때마다 액션의 정보와 액션이 디스패치 되기 전 후의 상태를 콘솔에 보여주는 LOGGING MIDDLEWARE

//ARROW FUNCTION
const loggerMiddleWare = (store) => (next) => (action) => {
  console.group(action && action.type) //action 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState())
  console.log("액션", action)
  next(action) //다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState())
  console.groupEnd() //그룹 끝
}

//FUNCTIONS
//const loggerMiddlWare=function loggerMiddleWare(store){
//   return function(next){
//     return function(action){
//Middleware
//     }
//   }
// }

export default loggerMiddleWare

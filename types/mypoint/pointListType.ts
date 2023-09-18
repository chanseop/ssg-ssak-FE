export interface pointListType{
  createAt: [number, number, number, number, number, number, number],
  id: number,
  isEvent: boolean,
  totalPoint: number,
  type: string,
  updatePoint: number
  updatedAt: [number, number, number, number, number, number, number]
  used: boolean
  userUUID: string
  }



// addTotalPoint:number,
//   pointList:{
//     createAt: [number, number, number, number, number, number, number],
//     id: number,
//     isEvent: boolean,
//     totalPoint: number,
//     type: string,
//     updatePoint: number
//     updatedAt: [number, number, number, number, number, number, number]
//     used: boolean
//     userUUID: string
//   },
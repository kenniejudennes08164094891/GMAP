export class User {
  constructor(
    public id: number,
    public name: string,
    public account: string,
    public gender: string
  ){}
}


export interface UserObject{
  id: number,
  name: string,
  account: string,
  gender: string
}

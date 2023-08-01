export class User {
  constructor(
    public name: string,
    public account: string,
    public gender: string
  ){}
}


export interface UserObject{
  name: string,
  account: string,
  gender: string
}

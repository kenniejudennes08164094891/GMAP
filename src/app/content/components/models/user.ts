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

export class Data {
  constructor(
    public name: string,
    public value: number,
    public color: string
  ){}
}

export class Paginate{
  constructor(
    id: number,
    gender: string,
    date_of_birth: string,
    job: string,
    city: string,
    zipcode: string,
    latitude: number,
    profile_picture: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    street: string,
    state: string,
    country: string,
    longitude: number

  ){}
}

export interface PaginateResponse{
  success: boolean,
  time: string,
  message: string,
  total_users: number,
  offset: number,
  limit: number,
  pageSize: number,
  users: []
}

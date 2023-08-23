import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Paginate, PaginateResponse } from '../models/user';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  paginate: Paginate[] | any = [];
  limit: number = 0;
  response: PaginateResponse = {
    success: true,
    time: '',
    message: '',
    total_users: 1000,
    offset: 0,
    limit: 10,
    pageSize: 1,
    users: []
  }

  constructor(private service: UserServiceService) { }

  viewSelected(){
    console.log("limit selected>>", Number(this.limit));
    this.response.limit = Number(this.limit);   //parseInt(this.limit) is an alternative
    this.fetchPaginateArray();
  }

  fetchPaginateArray() {
    this.service.fetchPaginationData(this.response.offset, this.response.limit).subscribe({
      next: (res: any) => {
        console.log("response from API>>", res);
        this.paginate = res?.users;
        this.response.limit = res?.limit;
        this.response.offset = res?.offset;
      },
      error: (err: any) => {
        console.error("API error>>", err);
      },
      complete: () => console.info("Pagination Implementation!")
    })
  }



  fetchNext() {
    this.response.offset++;
    this.fetchPaginateArray();
  }

  fetchPrevious() {
    if(this.response.offset > 0){
      this.response.offset--
      this.fetchPaginateArray();
    }
  }

  ngOnInit(): void {
    this.fetchPaginateArray();
  }

}

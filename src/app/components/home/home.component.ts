import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'
import { figures } from '../../classes/figures'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indianCount: Array<figures>;
  globalCount: Array<figures>;

  constructor(private service: DataService) { }

  ngOnInit() {
    /*this.service.getIndianData()
      .subscribe(
        data => {
          this.indianCount = data.results;
          console.log(data)
        }
      );

    this.service.getGlobalData()
      .subscribe(
        data => {
          this.globalCount = data.results;
          console.log(data)
        }
      );
    */
  }
}

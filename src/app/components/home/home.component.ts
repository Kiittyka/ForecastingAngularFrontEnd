import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'
import { figures } from '../../classes/figures'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalCount: Array<figures>
  countryCount: Array<figures>

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(
        data => {
          this.totalCount = data['Global'];
          this.countryCount = data['Countries'][76];
          console.log(this.totalCount)
          console.log(this.countryCount)
        }
      );
  }
}

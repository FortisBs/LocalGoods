import { Component, OnInit } from '@angular/core';
import { FarmerService } from "../farmer.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-farmer-farms',
  templateUrl: './farmer-farms.component.html',
  styleUrls: ['./farmer-farms.component.scss']
})
export class FarmerFarmsComponent implements OnInit {
  farms$!: Observable<any>;

  constructor(private farmerService: FarmerService) {}

  ngOnInit(): void {
    this.farms$ = this.farmerService.getAllFarms();
  }
}

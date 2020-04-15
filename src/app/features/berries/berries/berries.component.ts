import { Component, OnInit } from '@angular/core';
import { BerriesService } from './berries.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss'],
  providers: [BerriesService],
})
export class BerriesComponent implements OnInit {
  berries$ = this.berriesService.results;

  constructor(private berriesService: BerriesService) {}

  ngOnInit(): void {}
}

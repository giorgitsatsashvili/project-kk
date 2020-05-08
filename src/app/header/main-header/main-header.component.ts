import { Component, OnInit } from '@angular/core';
import {parseJsonSchemaToOptions} from "@angular/cli/utilities/json-schema";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
kolo = false;
  constructor() { }

  ngOnInit() {
  }

}

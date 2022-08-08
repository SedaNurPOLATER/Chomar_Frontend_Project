import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Individual Users',
      fieldText: 'PC protection'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Mobile Devices',
      fieldText: 'Protect your mobile devices'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Enterprise Solutions',
      fieldText: 'All-round protection for businesses'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

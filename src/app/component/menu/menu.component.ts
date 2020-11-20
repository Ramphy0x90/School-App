import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  currentTab: number = 0;
  tabs: any[] = [
    {
      name: "Grades",
      path: "/grades",
      icon: "bar-chart-outline"
    },
    {
      name: "Homework",
      path: "/homeworks",
      icon: "journal-outline"
    },
    {
      name: "Subject",
      path: "/subject",
      icon: "library-outline"
    }
  ];

  constructor() { }

  ngOnInit() {}

  test(ev: any){
    this.currentTab = ev.detail.value;
    console.log(ev.detail.value);
  }
}

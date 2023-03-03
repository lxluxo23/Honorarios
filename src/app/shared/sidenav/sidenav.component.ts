import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';
import { ActivatedRoute } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidebarVisible = false;
  navbarData = navbarData;
  isCollapsed = true;

  constructor(private route: Router) { }
  isActive(item: any): boolean {
    // console.log("url del navegador", this.route.url.split('/')[1])
    // console.log("url a comparar", item.routeLink)
    return this.route.url.split('/')[1] === item.routeLink;
    // return this.routurle.snapshot.url.join('/') === item.routeLink;
  }

  toggle() {
    this.sidebarVisible = !this.sidebarVisible
  }
  ngOnInit(): void {

  }
}

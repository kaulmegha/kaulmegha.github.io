import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  onClick(id: string) {
    if (id === 'resume') {
      window.open('assets/resume/Resume_Megha_Kaul.pdf', '_blank');
    } else {
      id = '#' + id;
      const element = document.querySelector(id);
      if (element) {
        this.location.replaceState(id);
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }
  }
}

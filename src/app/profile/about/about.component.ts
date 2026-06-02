import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgFor, NgTemplateOutlet} from '@angular/common';
import {AboutServiceToken} from '../../services/about/about.service';
import {MockAboutService} from '../../services/about/mock-about.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgTemplateOutlet],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [{provide: AboutServiceToken, useClass: MockAboutService}]
})
export class AboutComponent implements OnInit {
  about$!: Observable<string[]>;
  private aboutService = inject(AboutServiceToken);

  ngOnInit() {
    this.about$ = this.aboutService.getAbout();
  }
}

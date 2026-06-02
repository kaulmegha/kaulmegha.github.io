import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutServiceToken} from '../../services/about/about.service';
import {MockAboutService} from '../../services/about/mock-about.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [
    {provide: AboutServiceToken, useClass: MockAboutService}
  ]
})
export class AboutModule {}

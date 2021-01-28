/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private translate: TranslateService,
    private seoService: SeoService,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}

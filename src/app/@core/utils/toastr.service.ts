import { Injectable } from '@angular/core';
import { NbComponentStatus, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {

  constructor(
    private _toastrService: NbToastrService,
    private _translateService: TranslateService,
  ) { }

  showToast(status: NbComponentStatus, msg, title, customIcon?) {
    const config: Partial<NbToastrConfig> = {
      status: status,
      duration: 8000,
    };
    if (customIcon) {
      config.icon = customIcon;
    }
    this._toastrService.show(msg, title, config);
  }

  showTranslatedToast(status: NbComponentStatus, msg: string, title: string, customIcon?) {
    const sub = this._translateService.get(title).subscribe(
      translation => {
        this.showToast(status, msg, translation, customIcon);
      });
    setTimeout(() => {
      sub.unsubscribe();
    }, 1000);
  }

}

import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, NbToastrConfig, NbToastRef, NbToastrService } from '@nebular/theme';

export interface ToastrBody {
  message: string;
  title?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) {
  }

  public showWarningToastr(toastrBody: ToastrBody): NbToastRef {
    return this.showToastr(
      { ...toastrBody },
      {
        position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
        status: 'danger',
      })
  }

  private showToastr({ message, title = 'Title' }: ToastrBody, config: Partial<NbToastrConfig>): NbToastRef {
    return this.toastrService.show(message, title, config);
  }
}

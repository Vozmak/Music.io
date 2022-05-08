import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export abstract class Unsubscribe implements OnDestroy {

  protected arraySubscription: Subscription[] = [];

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (!!subscription) {
        subscription.unsubscribe();
      }
    })
  }

  protected get subscriptions() {
    return this.arraySubscription;
  }
}

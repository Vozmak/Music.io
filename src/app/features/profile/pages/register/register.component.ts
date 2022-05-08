import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetName } from '../../../../core/store/profile/profile.actions';
import { ProfileState } from '../../../../core/store/profile/profile.state';
import { Unsubscribe } from '../../../../shared/base-classes/unsubscribe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends Unsubscribe implements OnInit {

  private name: string;
  public editable: boolean = false;

  @Select(ProfileState.username) username$: Observable<string>
  public username: string | null;

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.username$.subscribe(username => {
      this.username = username;
    })
  }

  public get status(): string {
    if (!this.name) {
      return 'danger';
    }
    return 'basic';
  }

  public onChangeName(event: string): void {
    this.name = event;
  }

  public onSubmitName(): void {
    this.store.dispatch(new SetName(this.name))
  }

  public isDisabledUsernameButton(): boolean {
    return !this.name;

  }

  public isDisabledUsernameInput(): boolean {
    return !!(!this.editable && this.username);

  }

  public editUsername(): void {
    this.editable = !this.editable;
    if (!this.editable) {
      this.store.dispatch(new SetName(this.name));
    }
  }
}

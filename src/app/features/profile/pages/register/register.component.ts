import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { SetImage, SetName } from '../../../../core/store/profile/profile.actions';
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
  @Select(ProfileState.image) image$: Observable<string>
  public image: string;

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    combineLatest([this.username$, this.image$])
      .subscribe(([username, image]) => {
        this.username = username;
        this.image = image
    })
  }

  public get status(): string {
    if (!this.name) {
      return 'danger';
    }
    return 'basic';
  }

  public get buttonIcon(): string {
    if (!this.username) {
      return 'checkmark-outline';
    }
    return 'edit'
  }

  public onChangeName(event: string): void {
    this.name = event;
  }

  public onSubmitName(): void {
    if (this.username) {
      if (this.editable) {
        this.store.dispatch(new SetName(this.name));
      }
      this.editable = !this.editable;
    } else {
      this.store.dispatch(new SetName(this.name))
    }
  }

  public isDisabledUsernameInput(): boolean {
    return !!(!this.editable && this.username);
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0]
    if (file) {
      let image = `data:${file.type};base64,`
      const reader = new FileReader();
      reader.onload = this.#handleReaderLoaded.bind(this, image);
      reader.readAsBinaryString(file);
    }
  }

  #handleReaderLoaded(image: string, readerEvt: any) {
    const binaryString = readerEvt.target.result;
    image += btoa(binaryString);
    this.store.dispatch(new SetImage(image));
  }
}

export class SetName {
  static readonly type = '[Profile] Set Name';
  constructor(public username: string) {
  }
}

export class SetImage {
  static readonly type = '[Profile] Set Image';
  constructor(public image: string) {
  }
}

export class SaveName {
  static readonly type = '[Profile] Save Name';
  constructor(public name: string) {
  }
}

export class SaveImage {
  static readonly type = '[Profile] Save Image';
  constructor(public image: string) {
  }
}

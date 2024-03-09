export class SetIsMobile {
  static readonly type = '[App] Set Is Mobile';
}

export class SetIsContactFormModalVisible {
  static readonly type = '[App] Set Is Contact Form Modal Visible';
  constructor(public payload: boolean) {}
}

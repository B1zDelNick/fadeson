import { FadesonPage } from './app.po';

describe('fadeson App', () => {
  let page: FadesonPage;

  beforeEach(() => {
    page = new FadesonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

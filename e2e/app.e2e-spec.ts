import { DirectivasPage } from './app.po';

describe('directivas App', () => {
  let page: DirectivasPage;

  beforeEach(() => {
    page = new DirectivasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

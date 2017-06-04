import { AppGeomatPage } from './app.po';

describe('app-geomat App', () => {
  let page: AppGeomatPage;

  beforeEach(() => {
    page = new AppGeomatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

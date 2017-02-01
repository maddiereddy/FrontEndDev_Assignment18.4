import { Assignment184Page } from './app.po';

describe('assignment18-4 App', function() {
  let page: Assignment184Page;

  beforeEach(() => {
    page = new Assignment184Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

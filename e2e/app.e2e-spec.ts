import { SearchNickNames2Page } from './app.po';

describe('search-nick-names2 App', function() {
  let page: SearchNickNames2Page;

  beforeEach(() => {
    page = new SearchNickNames2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

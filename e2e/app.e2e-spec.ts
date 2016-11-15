import { AgileEnginePage } from './app.po';

describe('agile-engine App', function() {
  let page: AgileEnginePage;

  beforeEach(() => {
    page = new AgileEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

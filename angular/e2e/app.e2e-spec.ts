import { ConferencePlannerPage } from './app.po';

describe('conference-planner App', () => {
  let page: ConferencePlannerPage;

  beforeEach(() => {
    page = new ConferencePlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

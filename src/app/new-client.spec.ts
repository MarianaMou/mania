import { NewClient } from './new-client';

describe('NewClient', () => {
  it('should create an instance', () => {
    expect(new NewClient("","","",null,null,"","","","")).toBeTruthy();
  });
});

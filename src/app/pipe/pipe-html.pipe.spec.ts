import { PipeHTMLPipe } from './pipe-html.pipe';

describe('PipeHTMLPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});

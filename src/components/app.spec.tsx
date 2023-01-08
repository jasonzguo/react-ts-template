import React from 'react';
import { expect } from 'chai';
import { cleanup, render } from '@testing-library/react';

import App from './App';

export default () => {
  afterEach(cleanup);

  describe('App', () => {
    it('should have text', () => {
      const { queryByTestId } = render(<App />);
      const element = queryByTestId('app')
      expect(element).not.equal(null);
      expect(element?.innerText).equal('Hello World!', 'Wrong Text');
    });
  });
};
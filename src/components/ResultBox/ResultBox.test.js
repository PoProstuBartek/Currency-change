import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    const testCases = [
      { amount: '100', from: 'PLN', to: 'USD', output: 'PLN 100.00 = $28.57'},
      { amount: '20', from: 'PLN', to: 'USD', output: 'PLN 20.00 = $5.71' },
      { amount: '200', from: 'PLN', to: 'USD', output: 'PLN 200.00 = $57.14' },
      { amount: '345', from: 'PLN', to: 'USD', output: 'PLN 345.00 = $98.57' },
    ];

    for(const testObj of testCases) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('resultWrapper');
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });

  it('should render proper info about conversion when USD -> PLN', () => {
    const testCases = [
      { amount: '100', from: 'USD', to: 'PLN', output: '$100.00 = PLN 350'},
      { amount: '20', from: 'USD', to: 'PLN', output: '$20.00 = PLN 70' },
      { amount: '200', from: 'USD', to: 'PLN', output: '$200.00 = PLN 700' },
      { amount: '340', from: 'USD', to: 'PLN', output: '$340.00 = PLN 1,190.00' },
    ];

    for(const testObj of testCases) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('resultWrapper');
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });

  it('should render proper info about conversion when from and to are same', () => {
    const testCases = [
      { amount: '100', from: 'PLN', to: 'PLN', output: 'PLN 100.00 = PLN 100'},
      { amount: '20', from: 'PLN', to: 'PLN', output: 'PLN 20.00 = PLN 20' },
      { amount: '200', from: 'USD', to: 'USD', output: '$200.00 = $200' },
      { amount: '340', from: 'USD', to: 'USD', output: '$340.00 = $340.00' },
    ];

    for(const testObj of testCases) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('resultWrapper');
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });

  it('should render proper info about conversion when amount is negative', () => {
    const testCases = [
      { amount: '-100', from: 'PLN', to: 'PLN', output: 'Wrong value, please enter positive number'},
      { amount: '-20', from: 'PLN', to: 'USD', output: 'Wrong value, please enter positive number' },
      { amount: '-200', from: 'USD', to: 'PLN', output: 'Wrong value, please enter positive number' },
      { amount: '-340', from: 'USD', to: 'USD', output: 'Wrong value, please enter positive number' },
    ];

    for(const testObj of testCases) {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const output = screen.getByTestId('resultWrapper');
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });

});


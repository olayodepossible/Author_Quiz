import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockData = {
  author:  {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
  },
  books: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'The Shining', 'IT'],
  highlight: 'none',
}

describe('Author Quiz', () => {
  it("renders without crashing", () => {
    render(<App {...mockData} onAnswerSelected={() => { }} />);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App {...mockData} onAnswerSelected={() => { }} />);
    });

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgoundColor).toBe("")
    })
  })
});
// test('renders learn react link', () => {
//   render(<App {...mockData} onAnswerSelected={ () => {}}/>);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

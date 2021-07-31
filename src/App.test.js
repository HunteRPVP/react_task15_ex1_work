import App, { Sum, Test, Counter } from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("func App", () => {
  describe("only methods without components", () => {
    it("Check method sum in Test 1 + 1", () => {
      const result = Test()(1, 1);
      //expect(actual): result, Sum(1, 1)
      //expected: 2
      expect(result).toEqual(2);
    });
    test("Check sum 1 + 2", () => {
      const result = Sum(1, 2);
      //expect(actual): result, Sum(1, 2)
      //expected: 3
      expect(result).toEqual(3);
    });
  });
  describe("only comp", () => {
    // test("renders learn react link", () => {
    //   render(<App />);
    //   const linkElement = screen.getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
    // });
    test("mount span", () => {
      const wrapper = mount(<App />);
      expect(wrapper.find("span").length).toBe(1);
    });
    test("mount span innerText", () => {
      const props = { start: 1 };
      const wrapper = shallow(<Counter {...props} />);
      expect(wrapper.find("span").text()).toEqual("1");
    });
    test("no span", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("span").length).toBe(0);
    });
  });
  describe("counter", () => {
    let wrapper;
    beforeEach(() => {
      const props = { start: 0 };
      wrapper = shallow(<Counter {...props} />);
    })
    afterEach(() => {
      wrapper = null;
    })
    test("find increment", () => {
      wrapper.find("#inc").simulate("click");
      expect(wrapper.find("span").text()).toEqual("1");
    })
    test("find decrement", () => {
      wrapper.find("#dec").simulate("click");
      expect(wrapper.find("span").text()).toEqual("-1");
    })
  })
});

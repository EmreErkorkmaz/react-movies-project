import { cleanup } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Layout from "./Layout";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../../store/store";

configure({ adapter: new Adapter() });

afterEach(cleanup);
it("renders Layout component", () => {
  const div = document.createElement("div");
  ReactDom.render(<Provider store= {store}><Layout /></Provider>, div);
  ReactDom.unmountComponentAtNode(div);
});

describe("<App />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("should render one <Nav /> component", () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
  it("should render one <Footer /> component", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

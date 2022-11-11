import App from "../App";
import { render } from "../testing/test-utils";
it("renders the App ", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
	// eslint-disable-next-line testing-library/no-render-in-setup
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});

//basic test to see if element exists
test("inputs should be initially empty", () => {
	const titleElement = screen.getByLabelText(/Post Title:/i);
	expect(titleElement.value).toBe("");

	const select = screen.getByLabelText(/Author:/i);
	const option = screen.getByRole("option", { name: "Aarna S" });
	userEvent.selectOptions(select, option);
	expect(select.value).toBe("2");
});

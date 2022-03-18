import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ComingSoon from "./Components/ComingSoon";
import EmailForm from "./Components/EmailForm";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<ComingSoon />
			<EmailForm />
		</div>
	);
}

export default App;

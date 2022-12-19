import {Routes, Route} from "react-router-dom";
import {SignupPage} from "./page/signup/SignupPage";

function App() {
  return (
		<Routes>
			<Route element={<SignupPage/>} path={"/signup"}/>
		</Routes>
  );
}

export default App;

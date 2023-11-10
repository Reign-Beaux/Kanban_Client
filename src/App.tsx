import { RouterProvider } from "react-router-dom";
import { router } from "./application/libraries/react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

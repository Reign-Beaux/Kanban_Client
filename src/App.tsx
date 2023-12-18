import { RouterProvider } from "react-router-dom";
import { router } from "./application/libraries/react-router-dom";
import { Snackbar } from "./presentation/components/composites";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Snackbar />
    </>
  );
}

export default App;

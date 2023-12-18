import { RouterProvider } from "react-router-dom";
import { router } from "./application/libraries/react-router-dom";
import { useSnackbarStore } from "./application/libraries/zustand";
import { Snackbar } from "./presentation/components/composites";

function App() {
  debugger;
  const { setSnackbar } = useSnackbarStore();
  const openSnackbar = () => {
    setSnackbar({ open: true, message: "¡Éxito!", typeMessage: "success" });
  };

  return (
    <>
      <RouterProvider router={router} />
      <button onClick={openSnackbar}>Click Me!</button>
      <Snackbar />
    </>
  );
}

export default App;

import "./styles.css";
import { useActions } from "./loginHandler";
import { Input, Button } from "@/presentation/components/composites";
import { Card, Anchor } from "@/presentation/components/elements";

export const Login = () => {
  const formSettings = useActions();

  return (
    <Card className="login-container">
      <h1 style={{ color: "var(--mu-text)" }}>Iniciar Sesión</h1>
      <form onSubmit={formSettings.handleSubmit}>
        <Input
          isClearable
          inputText="Usuario"
          inputName="userName"
          formSettings={formSettings}
        />
        <Input
          isPassword
          inputText="Contraseña"
          inputName="password"
          formSettings={formSettings}
        />
        <Button className="login-button" type="submit" isLoading={formSettings.isSubmitting}>
          Iniciar Sesión
        </Button>
        <hr />
        <Anchor to={"/temporal-password"}>¿Olvidaste tu contraseña?</Anchor>
      </form>
    </Card>
  );
};

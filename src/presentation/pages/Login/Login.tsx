import { Button, Input } from "@/presentation/components/composites";
import { Anchor, Card } from "@/presentation/components/elements";
import { useActions } from "./loginHandler";
import "./styles.css";

export const Login = () => {
  const formSettings = useActions();

  return (
    <Card className="login-container">
      <h1 style={{ color: "var(--mu-text)" }}>Iniciar Sesión</h1>
      <form onSubmit={formSettings.handleSubmit}>
        <Input isClearable inputText="Usuario" inputName="userName" formSettings={formSettings} />
        <Input isPassword inputText="Contraseña" inputName="password" formSettings={formSettings} />
        <Button className="login-button" type="submit" isLoading={formSettings.isSubmitting}>
          Iniciar Sesión
        </Button>
        <hr />
        <Anchor to={"/recover-password"}>¿Olvidaste tu contraseña?</Anchor>
      </form>
    </Card>
  );
};

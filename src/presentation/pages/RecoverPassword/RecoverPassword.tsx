import { Button, Input } from "@/presentation/components/composites";
import { Anchor, Card } from "@/presentation/components/elements";
import { useRecoverPasswordHandler } from "./recoverPasswordHandler";
import "./styles.css";

export const RecoverPassword = () => {
  const formSettings = useRecoverPasswordHandler();

  return (
    <Card className="recover-password-container">
      <h1 style={{ color: "var(--mu-text)" }}>Recuperar contraseña</h1>
      <form onSubmit={formSettings.handleSubmit}>
        <Input isClearable inputText="Usuario" inputName="userName" formSettings={formSettings} />
        <Anchor className="recover-password-button" to="/login" type="button">
          Cancelar
        </Anchor>
        <Button
          className="recover-password-button"
          type="submit"
          isLoading={formSettings.isSubmitting}>
          Enviar
        </Button>
      </form>
    </Card>
  );
};

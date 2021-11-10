import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactioModal: () => void;
}

export function Header({onOpenNewTransactioModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="DT Money" />
        <button onClick={onOpenNewTransactioModal} type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}

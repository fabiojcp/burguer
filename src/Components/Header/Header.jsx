import {
  HeaderMain,
  HeaderLogo,
  HeaderForm,
  HeaderInput,
  HeaderButton,
} from "./style.jsx";
import Logo from "../../Assets/Images/Logo.png";

export default function Header({InputValue, setInputValue, filter}) {
  return (
    <HeaderMain>
      <HeaderLogo src={Logo} alt="Logo BurguerKenzie" />
      <HeaderForm>
        <HeaderInput
          value={InputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Pesquisar produto"
        />
        <HeaderButton type="button" onClick={() => filter(InputValue)}>
          Pesquisar
        </HeaderButton>
      </HeaderForm>
    </HeaderMain>
  );
}

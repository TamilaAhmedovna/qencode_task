import { ReactNode } from 'react';
import { ButtonStyled } from './SigninWithButton.styles';

type Props = {
  icon: ReactNode;
  label: string;
}

function SigninWithButton(props: Props) {
  const { icon, label } = props

  return (
    <ButtonStyled variant='outlined'>
      {icon}
      {label}
    </ButtonStyled>
  );
}

export default SigninWithButton;

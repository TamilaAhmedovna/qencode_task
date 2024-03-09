import { ReactNode } from 'react';
import './SigninWithButton.css';

type Props = {
  icon: ReactNode;
  label: string;
}

function SigninWithButton(props: Props) {
  const { icon, label } = props

  return (
    <div>
      <button>
        {icon}
        {label}
      </button>
    </div>
  );
}

export default SigninWithButton;

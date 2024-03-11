import Logo from '../logo/Logo';
import SigninWithButton from '../signin-with-button/SigninWithButton';
import GoogleIcon from './../../icons/Google.svg?react';
import GithubIcon from './../../icons/Github.svg?react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { AppContainer, FormStyled } from './App.styles';

type FormValues = {
  workEmail: string
  password: string
}

function App() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      workEmail: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  console.log(watch("workEmail"))

  return (
    <AppContainer>
      <Logo />
      <Typography fontSize={"30px"}>Log in to your account</Typography>
      <Box display="flex" width="100%" gap="14px">
        <SigninWithButton
          icon={<GoogleIcon />}
          label='Google'
        />
        <SigninWithButton
          icon={<GithubIcon />}
          label='Github'
        />
      </Box>
      <Divider sx={{width: "100%"}}>or</Divider>
      <FormStyled onSubmit={handleSubmit(onSubmit)} >
        <Controller
          render={({ field }) =>
            <TextField
              {...field}
              placeholder='Work email'
              variant="outlined"
              error={!!errors.workEmail}
              helperText={errors.password ? "Invalid Work email." : ""}
            />}
          name="workEmail"
          control={control}
          rules={{ required: true }}
        />

        <Controller
          render={({ field }) =>
            <TextField
              {...field}
              placeholder='Password'
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? "Invalid Password." : ""}
            />}
          name="password"
          control={control}
          rules={{ required: true }}
        />

        <Button type="submit" variant="contained">Log in to Qencode</Button>
      </FormStyled>
      <Typography>
        Is your company new to Qencode? 
        <a href='#'>Sign up</a>
      </Typography>
    </AppContainer>
  );
}

export default App;

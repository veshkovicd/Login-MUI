import { Link, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material"
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleRememberPassword(event) {
    setRememberMe(event.target.checked)
  }

  function handleSignIn() {
    console.log("Email:", email);
    console.log("Password:", password)
    console.log(rememberMe)
  }

  return (
    <>
      <Container sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box m="auto" width="500px" display="flex" flexDirection="column" gap={3} justifyContent="center">
          <Typography variant="h4" align="center">
            Sign in
          </Typography>
          <TextField id="1" label="Email Address*" variant="outlined" onChange={handleEmailChange} fullWidth />
          <TextField id="2" type="password" label="Password*" variant="outlined" onChange={handlePasswordChange} fullWidth />
          <FormControlLabel control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={handleRememberPassword} />}
            label="Remember me"
          />
          <Button type="submit" color="primary" variant="contained" onClick={handleSignIn}>
            Sign in
          </Button>

          <Box display='flex' justifyContent="space-between">
            <Link>
              Forgot password?
            </Link>

            <Link>
              Don&apos;t have an account? Sign Up
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App;

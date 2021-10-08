import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../Login/Login.module.css'
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { purple,cyan } from '@mui/material/colors';
const theme = createTheme({
   palette: {
    primary: {
      main: cyan[500],
    },
    secondary:{
      main: cyan[500],
    }, 
  },
});

const Signup = () => {
    return (
        <div className={styles.mainDivLogin}>
            
            <div className={styles.boxInputField}>
                <img src="https://res.cloudinary.com/rsbrsb/image/upload/v1633696870/WhatsApp_Image_2021-10-08_at_4.56.50_PM_lvvvq6.jpg" alt="" className={styles.boxInputFieldImg} />
            <ThemeProvider theme={theme}>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                    <TextField  label="Name" color="secondary" focused className={styles.textInputField} inputProps={{ style: { fontFamily: 'Arial', color: 'cyan'}}}/>
                    <TextField label="Email" color="secondary" focused className={styles.textInputField}
                    inputProps={{ style: { fontFamily: 'Arial', color: 'cyan'}}}/>
                    <TextField  label="Password" color="secondary" focused className={styles.textInputField} inputProps={{ style: { fontFamily: 'Arial', color: 'cyan'}}}/>
                </Box>
                <div className={styles.btnLoginDiv}>
                    <button className={styles.loginBtn}><span /><span /><span /><span /> Register</button>
                </div>
                
            </ThemeProvider>
            </div>
        </div>
    )
}

export default Signup

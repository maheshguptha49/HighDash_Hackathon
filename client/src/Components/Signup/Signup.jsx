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
                <svg width="310.00000000000006" height="36.43043673743402" viewBox="0 0 310.00000000000006 36.43043673743402" class="css-1j8o68f"><defs id="SvgjsDefs1724"></defs><g id="SvgjsG1725" featurekey="nameFeature-0" transform="matrix(1.203153996339636,0,0,1.203153996339636,-1.2690868757281288,-12.424970916308615)" fill="#e50914"><path d="M27.09 26.719 c1.1328 4.1016 -2.2656 8.9453 -5.4102 11.074 c-6.1719 4.043 -14.316 3.3984 -20.625 0.15625 l1.8359 -8.125 l3.0273 0 c0.39063 4.1992 9.7852 5.9375 10.742 1.7969 c0.46875 -2.0508 -6.8945 -2.6172 -9.3555 -4.5508 c-0.13672 -0.11719 -0.29297 -0.23438 -0.41016 -0.35156 l-1.7969 0 c-1.9531 -1.8359 -2.1289 -4.2773 -1.5625 -6.8164 c2.3828 -10.41 16.523 -11.445 24.688 -7.3242 l-1.8164 7.9102 l-3.0469 0 c0.19531 -2.9688 -8.7891 -5 -9.6289 -1.4258 c-0.56641 2.7734 8.5352 1.9531 11.055 6.3477 c0.21484 0.39063 0.39063 0.85938 0.50781 1.3086 l1.7969 0 z M46.42603125 26.719 l-2.9688 13.359 l-9.9023 0 l3.0469 -13.359 l-1.7773 0 l1.9727 -8.5547 l-7.8125 0 l1.7188 -7.4023 l25.352 0 l-1.6602 7.4023 l-7.793 0 l-1.9141 8.5547 l1.7383 0 z M56.3086375 26.719 l-1.7773 0 l3.6328 -15.957 c3.3984 0 9.5313 -0.33203 14.375 0.3125 c4.2773 0.625 8.418 2.207 7.6953 7.3438 c-0.41016 3.1055 -2.793 6.2891 -5.3711 8.3008 l1.7578 0 c-0.46875 0.35156 -0.9375 0.72266 -1.4453 0.97656 l6.6797 12.383 l-11.719 0 l-4.8828 -9.5508 l-2.168 9.5508 l-9.8438 0 z M66.3869375 17.988 l-1.1914 5.0391 c4.707 0 7.3438 -5.0391 1.1914 -5.0391 z M85.35155625 27.344 l-1.9922 0 l3.8281 -16.484 l20.918 0 l-1.6797 7.4023 l-11.152 0 l-0.58594 2.5 l10.254 0 l-1.5039 6.582 l1.9922 0 l-0.17578 0.78125 l-10.273 0 l-1.0352 4.5703 l11.113 0 l-1.6797 7.3828 l-20.957 0 z M110.52738125 27.266 l-2.2461 0 l9.1797 -16.387 l9.7461 0 l1.582 16.387 l2.1875 0 l1.2305 12.715 l-10.059 0 l-0.41016 -5.4883 l-5.5664 0 c-0.97656 1.8164 -1.8945 3.6523 -2.8711 5.4883 l-9.8828 0 z M121.48428125 27.676000000000002 l0 -0.41016 l-2.1289 0 l0.039063 -6.4844 l-2.6172 6.4844 l2.168 0 l-0.15625 0.41016 l2.6953 0 z M165.9181875 27.266 l-2.9688 12.715 l-9.7656 0 l2.5586 -10.84 c-0.99609 1.5039 -1.9922 2.9883 -2.9102 4.4922 l-6.8945 0 l-0.83984 -4.5313 l-2.5586 10.879 l-9.3555 0 l2.8906 -12.715 l-1.7578 0 l3.7695 -16.367 l10.371 0 l2.1289 10.41 c2.2852 -3.4375 4.5703 -6.9141 6.9141 -10.41 l10.371 0 l-3.7695 16.367 l1.8164 0 z M169.2578 27.266 l-1.7969 0 l3.75 -16.367 l9.8047 0 l-3.7891 16.367 l1.8164 0 l-1.2891 5.332 l10.84 0 l-1.6797 7.3828 l-20.605 0 z M201.40646875 27.344 l-2.9297 12.734 l-9.8828 0 l2.9297 -12.734 l-1.9922 0 l3.8281 -16.484 l9.8633 0 l-3.7891 16.484 l1.9727 0 z M231.99240625 27.266 l-2.9102 12.715 l-9.082 0 l-3.8672 -12.715 l-0.44922 0 l-2.9492 12.715 l-9.1992 0 l2.9492 -12.715 l-1.7773 0 l3.7695 -16.367 l10.723 0 l3.1641 10.273 l2.4023 -10.273 l9.2383 0 l-3.7891 16.367 l1.7773 0 z M235.957025 27.344 l-1.9922 0 l3.8281 -16.484 l20.918 0 l-1.6797 7.4023 l-11.152 0 l-0.58594 2.5 l10.254 0 l-1.5039 6.582 l1.9922 0 l-0.17578 0.78125 l-10.273 0 l-1.0352 4.5703 l11.113 0 l-1.6797 7.3828 l-20.957 0 z"></path></g></svg>
                {/* <img src="https://res.cloudinary.com/rsbrsb/image/upload/v1633696870/WhatsApp_Image_2021-10-08_at_4.56.50_PM_lvvvq6.jpg" alt="" className={styles.boxInputFieldImg} /> */}
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

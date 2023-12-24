import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

export const Colors = {
    primary: "#3949AB",
    primaryLight: "#6F74DD",
    error: "#FF3333",
    textFieldOutline: "#D0D0D0",
    white: "#ffffff",
    grayText: "#828282",
    background: "#3949AB",
    outlinedButtonText: "#343434",
    alertTextColor: "#F0B212",

};

export const mainTheme = createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
                xxl: 1400
            }
        },
        palette: {
            primary: {
                main: Colors.primary,
                light: Colors.primaryLight,
                dark: Colors.primary,
                contrastText: Colors.white,
                textGray: Colors.grayText
            },
        },
        typography: {
            fontFamily: "Open Sans",
        },
        /**
         * @see https://material-ui.com/customization/globals/#default-props
         */
        components: {
            MuiTextField: {
                defaultProps: {
                    variant: "outlined",
                },
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-root": {
                            width: "100%",
                            "& fieldset": {
                                borderColor: Colors.textFieldOutline,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: Colors.primary,
                            },
                        },
                        "& .MuiIconButton-root": {
                            padding: 0,
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: "8px",
                        height: '40px',
                        padding: '4px 8px',
                        fontSize: '14px',
                        "&:hover": {
                            borderColor: 'red !important',
                        },
                    },
                    input: {
                        height: '40px',
                        padding: '2px',
                        "&::placeholder": {
                            color: "#828282",
                        },
                    },
                    notchedOutline: {
                        "&:hover": {
                            borderColor: "red",
                        },
                    },
                },
            },
        }
    }
);

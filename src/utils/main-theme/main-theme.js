import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

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
            error: {
                main: Colors.error,
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
            MuiTypography: {

                styleOverrides: {
                    h1: {
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "32.68px",
                        color: "#000000",
                        [breakpoints.down("sm")]: {
                            fontSize: "20px",
                            lineHeight: "25.68px",
                        },
                    },
                    h2: {
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "48px",
                        color: "#000000",
                        [breakpoints.down("sm")]: {
                            fontSize: "20px",
                            lineHeight: "36px",
                        },
                    },
                    h3: {
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#222222",
                    },

                    body1: {
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "28px",
                        [breakpoints.down("md")]: {
                            fontSize: "14px",
                            lineHeight: "28px",
                        },
                    },
                    subtitle1: {
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "19.01px",
                    },
                    subtitle2: {
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                    },
                    caption: {
                        fontStyle: "normal",
                        fontWeight: 400,
                        color: 'rgba(26, 27, 31, 0.5)',
                        fontSize: "12px",
                        lineHeight: "16px",
                    },
                }
            },
            MuiButton: {
                defaultProps: {
                    variant: "contained",
                    size: "medium",
                },
                styleOverrides: {
                    root: {
                        height: '40px',
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "19.07px",
                        textTransform: "capitalize",
                        [breakpoints.down("md")]: {
                            borderRadius: "8px",
                            fontSize: "14px",
                            lineHeight: "18px",
                        },
                    },
                    outlined: {
                        color: Colors.outlinedButtonText,
                        borderColor: Colors.textFieldOutline,
                    }

                }
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '19.2px',
                        color: Colors.alertTextColor,
                        background: '#FFF5DD',
                        padding: '16px',
                        borderRadius: '10px',
                    },
                    message: {
                        padding: '0px'
                    }
                },
            },

        }
    }
);

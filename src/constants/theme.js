export const COLORS = {
    header_bg:"hsl(210, 20%, 10%)",
    primary: "hsl(210, 20%, 15%)",
    secondary: "hsl(210, 20%, 25%)",
    white: "#FFF",
    gray: "#74858C",
    gray_ligth: '#8c8c8c',
    warning: '#ff3300',
    green:'#00b386',
    black: '#000000',
    yellow_dark:"#665200",
    yellow_ligth:'#e6e600',
    yellow:'#cccc00',
    red:'#ff6666'
  };
  
  export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
  };
  
  export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
  };
  
  export const SHADOWS = {
    light: {
      shadowColor: COLORS.white,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 9,
    },
    medium: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    dark: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    },
  };
  
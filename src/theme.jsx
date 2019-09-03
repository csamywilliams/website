const paleOrange = '#EED093';
const beige = '#FBF8F3';
const green = '#8EBE68';
const brown = '#2D1710';
const white = '#fff';

const color1 = beige;
const color2 = paleOrange;
const color3 = green;
const color4 = beige;
const color5 = green;

const theme = {
    main: {
        button: {
            primary: {
                bg: color5,
                color: white,
                hover: {
                    bg: white,
                    color: color5,
                    border: color5,
                }
            }
        },
        navbar: {
            bg: color2,
            border: color2
        },
        link: {
            hover: color2,
            color: color1
        },
        hamburger: {
            lines: white,
        },
        section: {
            odd: {
                bg: color4,
                color: white
            },
            even: {
                bg: color4,
                color: white
            }
        },
        hexagon: {
            bg: color5
        },
        post: {
            border: color4,
            summary: {
                bg: white
            }
        },
        icons: {
            contact: {
                color: color5,
                size: "2em",
            },
            bar: {
                color: color4,
                size: "1.5em"
            }
        },
        footer: {
            bg: color2
        }

    }
};

export default theme;
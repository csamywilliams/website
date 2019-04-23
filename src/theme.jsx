const paleOrange = '#EED093';
const beige = '#FBF8F3';
const green = '#8EBE68';
const sage = '#60AB68';
const pink = '#F6C3A8';
const fuschia = '#E91E87';
const paleyellow = '#E7D980';
const brown = '#2D1710';
const white = '#fff';

const theme = {
    main: {
        button: {
            primary: {
                bg: green,
                color: white,
                hover: {
                    bg: white,
                    color: green,
                    border: green,
                }
            }
        },
        navbar: {
            bg: paleOrange,
            border: paleOrange
        },
        link: {
            hover: paleOrange,
            color: brown
        },
        hamburger: {
            lines: white,
        },
        section: {
            weather: {
                bg: beige,
                color: white
            }
        },
        hexagon: {
            bg: green
        },
        post: {
            border: beige,
            summary: {
                bg: white
            }
        },
        icons: {
            color: green,
            size: "2em"
        },
        footer: {
            bg: paleOrange
        }

    }
};

export default theme;
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft blue: hsl(215, 51%, 70%)
- Cyan: hsl(178, 100%, 50%)

### Neutral

- Very dark blue (main BG): hsl(217, 54%, 11%)
- Very dark blue (card BG): hsl(216, 50%, 16%)
- Very dark blue (line): hsl(215, 32%, 27%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 18px

### Font

- Family: [Outfit](https://fonts.google.com/specimen/Outfit)
- Weights: 300, 400, 600

::root {
  --soft-blue: hsl(215, 51%, 70%);
  --cyan: hsl(178, 100%, 50%);
  --very-dark-blue-main: hsl(217, 54%, 11%); /* main BG */
  --very-dark-blue-card: hsl(216, 50%, 16%); /* card BG */
  --very-dark-blue-line: hsl(215, 32%, 27%); /* line */
  --white: hsl(0, 0%, 100%);
}

@font-face {
  font-family: 'Outfit-Light';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/outfit/static/Outfit-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-Regular';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/outfit/static/Outfit-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Outfit-SemiBold';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/outfit/static/Outfit-SemiBold.ttf') format('truetype');
}

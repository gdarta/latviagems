# Internet Search Technologies website

## Deploying to Github pages.

Any changes committed to `main/docs` (and only here) will be automatically deployed to https://gdarta.github.io/latviagems/. 

## Setting up environment with Tailwind

### Documentation: [Tailwind CSS](https://tailwindcss.com/)

1. Open the project folder in terminal and install the Tailwind CLI: 
`npm install tailwindcss @tailwindcss/cli`

2. Start the Tailwind CLI build process:
`npx @tailwindcss/cli -i ./docs/input.css -o ./docs/output.css --watch`

This will convert any Tailwind classes made in `index.html` to pure css in `output.css`. For website to run successfully, only `output.css` is necessary.

Tutorial: https://tailwindcss.com/docs/installation/tailwind-cli

## Creating a new HTML file

If you create a new file, do not forget to add 
`<link href="output.css" rel="stylesheet">` in the `<head></head>` tag. 

All of the HTML files should be under `/docs`.

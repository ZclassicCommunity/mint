# Mint, an ZSLP Management Suite

## Create and control your ZSLP Tokens in your browser

_Mint is client-only: the app runs in your web browser. Mint uses rest.zslp.org as the default back-end, but the user may select any backend. Mint is non-custodial and does not have access to your private keys. You must back up your wallet to recover your funds._

### Features

- Create your own ZSLP token
- Pay ZCL dividends to ZSLP token holders
- Mint (create additional token supply for tokens without fixed supply)
- Send & Receive ZCL and ZSLP tokens
- Import existing wallets
- Choose your own REST API (default: rest.zslp.org)
- Hosted online at https://mint.zslp.org or run locally with `npm start`

### Learn more about the ZClassic Simple Ledger Protocol: https://zslp.org/

## Development

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Production

In the project directory, run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Mint Project Roadmap

Mint will continue adding new features to best support user-friendly ZSLP token management. If you have an idea for a feature, please create an issue in this repository.

The following features are under active development:

- Custom OP_RETURN notes on user-created dividend transactions
- ZSLP Airdrops (send any user-specified ZSLP token to holders of any user specified ZSLP token) up to 10,000 recipients

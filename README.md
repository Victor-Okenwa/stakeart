![StakeArt](./src/assets/logo/stakeart.svg)

# STAKEART
 Stakeart is an application that aims to bridge the gap between Art investors and Art sellers, and between Tangible Artworks and the web3 space. It aims to restore the value of Non-Fungible Tokens (NFTs) through REAL-WORD asset affiliation. 

### Key Features
- Staking
- Re-Auction
- Collection
- Gallery
-  Asset Minting
-  Art exhibition

 ### Structure (how it works)
  > The Auction system of the software is based on a Discretionary auction system were the `Auctioneer` has full rights to choose any bidder. Auctions has a duration define d by the `Auctioneer`.

  > The staking feature of the app is defined by the agreement [contract] between the `Client` and the `Staker` based on the duration of staking, minimum accepted amount and interest (pay back). If the`Staker` agrees with a `Client` a contract is immediately signed and `Client` has access to `Auction` the art within the duration.

  > The Collectible feature of the app is a shareable feature. Here the `Owner` puts art on exhibition for free and can accept one of any `Collector` that pleads for the art. Once the `Owner` signs with a `Collector` access rights are transferred to the `Collector` but the `Owner` has a 1%/Number of collectives on any auction on the art.



### View demo
View demo: [Stakeart Preview](https://stakeart.vercel.app/)

## Installation and Usage
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

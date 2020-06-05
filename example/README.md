## MercadoPago Checkout Example

The code in this folder shows an example on how to integrate with the checkout.

## Table of contents

- [Pre Requisites](#pre-requisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
  - [NPM](#npm)
  - [YARN](#yarn)
- [Running App](#running-app)
  - [Android](#android)
  - [IOS](#ios)

## Pre Requisites

As a pre requisite you'll need the following before running the example app:

1. A MercadoPago Account
2. A `publicKey` from your MercadoPago Account

If you don't have any of the followings, you can start from here:

1. [Creating a MercadoPago Account](https://www.mercadopago.com.ar/)
2. [Creating a MercadoPago Application](https://applications.mercadopago.com/)

If you've more doubts you can read more documentation in this portal:

- [MercadoPago Developers](https://developers.mercadopago.com/)

## Environment Variables

You'll need to create in this folder a `.env` file with the following keys:

```bash
#.env
MP_ACCESS_TOKEN=Your_MP_Access_Token
MP_PUBLIC_KEY=Your_MP_Public_Key
```

The example project uses `react-native-config` to manage `.env` variables.

## Installation

You can install dependencies via NPM or YARN.

### NPM

```bash
npm install
```

### YARN

```bash
yarn install
```

## Running App

### IOS

For running the app in `IOS` you'll have to follow these steps:

1. Open a terminal positioning `example/ios` and run:

```bash
pod install
```

2. Open a terminal positioning in the `example` folder and run:

```bash
npm start
```

3. Open another terminal positioning in the `example` folder and run:

```bash
npm run ios
```

If everything goes right, you'll be able to see your app in the simulator.

### Android

For running the app in `Android` you'll have to follow these steps:

1. Open a terminal positioning in the `example` folder and run:

```bash
npm start
```

2. Open another terminal positioning in the `example` folder and run:

```bash
npm run android
```

If everything goes right, you'll be able to see your app in the emulator.
import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

class MainApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MainApp;

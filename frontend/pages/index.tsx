import Head from "next/head";
import { Button, TextField } from "@taikai/rocket-kit";
import { useWeb3 } from "../hooks/useWeb3";
import { Container, Main, NavBar, BrandName, Menu , Footer, Title, SubTitle, Content}  from "../styles/home";
import ConnectModal from "../components/connect-wallet-modal";
import React, { useState } from 'react';
import ClickableEthAddress  from "../components/clickable-eth-address";

export default function Home() {

  const { connected } = useWeb3();
  const [isConnectModal, setConnectModal] = useState(false);
  return (
    <Container>
      <Head>
        <title>AI NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar 
        style={{
          color: "#FFF", 
          display: "flex",
          background: "white"}}>
        {/* <BrandName>AI NFT Marketplace</BrandName> */}
        <Button
              ariaLabel="BuyTokens"
              className="button"
              value="Buy Tokens"
              color="white"
              txtColor="black"
              variant="solid"
              action={()=> setConnectModal(true)}
              style={{
                margin: "2px"
              }}
            />
        <Menu>
          {!connected && (
            <Button
              ariaLabel="Connect"
              className="button"
              color="white"
              txtColor="black"
              value="Connect your wallet"
              variant="solid"
              action={()=> setConnectModal(true)}
              style={{
                margin: "2px"
              }}
            />
          )}
          {connected && <ClickableEthAddress onClick={()=> setConnectModal(true)}/>}
        </Menu>
      </NavBar>
      {isConnectModal && <ConnectModal onClose={()=> setConnectModal(false)}/>}
      <Main>
        <Content>
          <Title>Give wings to your horses!</Title>
          <Title
            style={{marginBottom: "20px"}}
          >Be bold. Be wild. Be GenIA.</Title>
          <TextField
            name="generate-prompt"
            onChange={function noRefCheck(){}}
            placeholder="Generate Image w/ Prompt"
            type="text"
            style={{
              background: "white", 
              width: "700px", 
              height: "50px",
              color: "#41424c", 
              textAlign: "center", 
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif"
            }}
            max={10}
          />
          <Button
              ariaLabel="generate"
              className="button"
              value="Generate"
              color="black"
              txtColor="white"
              variant="solid"
              action={()=> setConnectModal(true)}
              style={{
                margin: "2px",
                fontWeight: "bold"
              }}
            />
        </Content>        
      </Main>
    </Container>
  );
}

import Layout from "../components/Layout";
import { useState } from "react";
import Cookie from "js-cookie";
//import { parseCookies } from "../lib/parseCookies";
import Head from "next/head";

const Signup = () => {
  const [username, setUsername] = useState("");

  function updateCookie() {
    Cookie.set("username", username);
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Title</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <form>
            username
            <input
              type="text"
              name="usernameInput"
              onKeyUp={(e) => setUsername(e.target.value)}
            />
            <button type="submit" onClick={() => updateCookie()}>
              submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
// Signup.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

export default Signup;

import Header from "@comp/layouts/header";
import Footer from "@comp/layouts/footer";
import Main from "@comp/layouts/main";
import Head from "next/head";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Header />
      <Main>{props.children}</Main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

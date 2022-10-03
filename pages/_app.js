import "../styles/globals.css";
import Navigation from "../ui/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto mt-5 px-20">
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

// import { SessionProvider } from "next-auth/react";
// function App({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
// export default App;
// //https://www.blackslate.io/articles/nextjs-google-authentication-using-nextauth

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/app/contexts/CartContext";
import { ThemeProvider } from "@/app/contexts/ThemeContext"

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default App;

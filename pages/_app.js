import AppContainer from '../containers/AppContainer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp

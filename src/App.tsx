
import { useHashRoute } from "./hooks/useHashRoute"
import HomePage from "./pages/HomePage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"

const App = () => {
  const { route } = useHashRoute()

  if (route === "terms") {
    return <TermsPage />
  }

  if (route === "privacy") {
    return <PrivacyPage />
  }

  return <HomePage />
}

export default App

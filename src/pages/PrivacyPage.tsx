import PageLayout from "../layouts/PageLayout"
import LegalPageContent from "../sections/LegalPageContent"
import { privacySections } from "../constants/content"

const PrivacyPage = () => {
  return (
    <PageLayout variant="light">
      <LegalPageContent
        title="Privacy Policy"
        sections={privacySections}
        contactLine="If you have questions, contact:"
      />
    </PageLayout>
  )
}

export default PrivacyPage

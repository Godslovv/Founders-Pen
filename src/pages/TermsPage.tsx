import PageLayout from "../layouts/PageLayout"
import LegalPageContent from "../sections/LegalPageContent"
import { termsSections } from "../constants/content"

const TermsPage = () => {
  return (
    <PageLayout variant="light">
      <LegalPageContent
        title="Terms of Use"
        intro="This Terms and Conditions (“Agreement”) is a legally binding agreement between Founder’s Pen (“Service Provider”) and the Client. By purchasing or using our services, the Client agrees to be bound by these terms. If the Client does not agree, they should not proceed with payment or onboarding."
        sections={termsSections}
        contactLine="For questions regarding these terms, contact: "
      >
      </LegalPageContent>
    </PageLayout>
  )
}

export default TermsPage

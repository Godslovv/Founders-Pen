import PageLayout from "../layouts/PageLayout"
import LegalPageContent from "../sections/LegalPageContent"
import { termsSections } from "../constants/content"

const TermsPage = () => {
  return (
    <PageLayout variant="light">
      <LegalPageContent
        title="Terms of Use"
        intro="This Terms and Conditions agreement is a legally binding agreement between Founders Pen and the client. By purchasing or using our services, the client agrees to be bound by these terms."
        sections={termsSections}
        contactLine="For questions regarding these terms, contact: founderspenhq@gmail.com"
      />
    </PageLayout>
  )
}

export default TermsPage

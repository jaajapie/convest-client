import MainLayout from '../src/layouts/MainLayout'
import Header from '../src/components/Header'
import RefferalView from '../src/views/Refferal'

export default function Referral() {

  return (
    <MainLayout>
    <Header title={`CONVEST FINANCE: Referral`}></Header>
    <RefferalView></RefferalView>
  </MainLayout>
  )
};

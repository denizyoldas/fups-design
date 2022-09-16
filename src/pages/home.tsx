import AccountSummary from '@/components/dashboard/account-summary'
import Campaign from '@/components/dashboard/campaign'
import Info from '@/components/dashboard/info'
import Header from '@/components/header'
import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/modules/navigation/navigation.min.css'
import '../../node_modules/swiper/modules/pagination/pagination.min.css'

const Home = () => {
  return (
    <div className="h-screen bg-[#f5f5fa] p-10 pt-6 overflow-y-auto">
      <Header />

      <section className="mt-20">
        <Campaign />
      </section>

      <section className="mt-6">
        <AccountSummary />
      </section>

      <section>
        <Info />
      </section>
    </div>
  )
}

export default Home

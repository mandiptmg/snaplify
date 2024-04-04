import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Nabar from '@/components/Nabar'
import Product from '@/components/Product'
import Sidebar from '@/components/Sidebar'
import BasicModal from '@/components/OpenModal'

export default function Home() {
  return (
    <main>
      <Nabar />
      <Main />
      <Product />
      <Sidebar />
      <BasicModal />
      <Footer />
    </main>
  )
}

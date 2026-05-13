import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) overflow-x-hidden">
    <Header/>
    <main className='  border-t border-(--primary)  mt-1.5 flex-1 min-h-screen w-full max-w-full overflow-x-hidden'>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default MainLayout
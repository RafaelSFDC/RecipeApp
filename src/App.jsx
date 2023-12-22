import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <main>
      <Sidebar />
      <div className='w-full p-5 bg-stone-200 flex flex-col gap-3'>
        <Header />
        <Content />
      </div>
    </main>
  )
}

export default App

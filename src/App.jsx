import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <main>
      <Header />
      <div className="">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}

export default App

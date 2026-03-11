import Header from './Header'
import Footer from './Footer'

function Layout({ children, darkMode, toggleDarkMode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

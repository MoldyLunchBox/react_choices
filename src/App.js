import Header from './components/Header'
import { AuthProvider } from './context';
function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Header title='Découvrez-vous en vidéo' />
      </AuthProvider>
    </div>

  )
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import { ThemeProvider } from './context/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import CityPage from './pages/city-page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'


const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme='dark'>
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      {/* <TanStackRouterDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}

export default App

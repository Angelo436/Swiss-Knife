import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Files from '@/pages/Files';
import Header from '@/components/layout/Header';

function App() {
  return (
    <BrowserRouter>   
      <Header/>
      
      <main className="flex-1 w-full max-w-7xl my-0 mx-auto p-6 flex flex-col gap-5">
        <Routes>
          {/* Captura /files, /files/home, /files/home/user, etc. */}
          <Route path="/files/*" element={<Files />} />
          
          {/* Opcional: Redirige la raíz "/" automáticamente a "/files" */}
          <Route path="/*" element={
            <div>
              <Navigate to="/files" replace />
            </div>
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

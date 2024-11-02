import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import FloatingShape from './components/FloationdShape'
import Header from './Layout/Header';
//import Home from './pages/Home/Home';


const App: React.FC = () => {
  return (
    <div
      className='min-h-screen bg-gradient-to-br
      from-gray-900 via-violet-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
    >

      <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <RouterProvider router={Router} />

      <Header title="Quiz App" />
     
    </div>
  );
};

export default App

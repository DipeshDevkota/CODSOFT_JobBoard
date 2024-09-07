import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Candidate from './pages/Candidate';
import Employee from './pages/Employee';
import Job from './pages/Job';
import Resource from './pages/Resource';
import PostJob from "./pages/PostJob";
import { JobProvider } from './context/UseContext';
import DashboardEmployer from "./pages/DashboardEmployer";
import SignCandidate from './pages/SignCandidate';
import Detail from "./pages/Detail";
import Apply from "./pages/Apply";
import DashboardCandidate from "./pages/DashboardCandidate";

const App = () => {
  return (
    <>
      <JobProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/candidate' element={<Candidate />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/job' element={<Job />} />
            <Route path='/resource' element={<Resource />} />
            <Route path='/dashboardemployer' element={<DashboardEmployer />} />
            <Route path='/dashboardcandidate/:id' element={<DashboardCandidate />} />

            <Route path='/signupcandidate/:id' element={<SignCandidate />} />
            <Route path='/job-detail/:id' element={<Detail />} />
            <Route path="/all-jobs" element={<PostJob />} />
            <Route path='/apply' element={<Apply />}/>

          </Routes>
        </BrowserRouter>
      </JobProvider>
    </>
  )
}

export default App;

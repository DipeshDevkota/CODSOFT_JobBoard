import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Candidate from './pages/Candidate';
import Employee from './pages/Employee';
import Job from './pages/Job';
import Resource from './pages/Resource';
import PostJob from "./pages/PostJob";
import { JobProvider } from './context/UseContext';
import SignEmployer from './pages/SignEmployer';
import SignCandidate from './pages/SignCandidate';
import Detail from "./pages/Detail";
import Apply from "./pages/Apply";

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
            <Route path='/signupemployer' element={<SignEmployer />} />
            <Route path='/signupcandidate' element={<SignCandidate />} />
            <Route path='/job-detail/:id' element={<Detail />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path='/apply' element={<Apply />}/>

          </Routes>
        </BrowserRouter>
      </JobProvider>
    </>
  )
}

export default App;

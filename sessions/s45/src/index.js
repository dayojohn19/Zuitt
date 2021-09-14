import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';

/*components*/
import AppNavbar from './components/AppNavbar';
import Banner from './components/Banner';
import CourseCard from './components/CourseCard';
import SampleCourse from './components/SampleCourse';


ReactDOM.render(
  <div>
    <AppNavbar/>

  </div>,
  document.getElementById('root')
);

ReactDOM.render(
  <div>
    <Banner />
    <CourseCard />
    <SampleCourse />
  </div>
  ,document.getElementById("body")
);



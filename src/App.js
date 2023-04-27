import './App.css';
import Car from './Car'
import Order from './orders/order';
import StudentList from './student/studentList'

function App() {
  const cars = ["Bmw", "Ford", "Honda"];
  const prices = [1000, 1200, 1000];
  return (
    <div className="App">
      <header className="App-header">
        <StudentList></StudentList>
      </header>
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // React Router hook

  const goToAbout = () => {
    navigate('/about'); // Navigate to the about page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>
      <button onClick={() => navigate('/user/1')}>Go to User 1</button>
      <button onClick={() => navigate('/user/2')}>Go to User 2</button>
    </div>
  );
}

export default Home;

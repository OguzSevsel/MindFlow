import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Get the user ID from the URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>Showing profile for user ID: {id}</p>
    </div>
  );
}

export default UserProfile;

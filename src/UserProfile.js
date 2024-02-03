import { useAuth } from './AuthProvider';

function UserProfile() {
  const { userInfo } = useAuth();

  if (!userInfo) return <div>Loading profile...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}

export default UserProfile;

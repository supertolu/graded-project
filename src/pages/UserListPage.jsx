function UserInfoList() {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsersList(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {usersList.map((user) => {
          <>
            <li>{user.fullName}</li>
            <li>{user.email}</li>
            <li>{user.userRole}</li>

          </>;
        })}
      </ul>
    </div>
  );
};

export default UserInfoList;
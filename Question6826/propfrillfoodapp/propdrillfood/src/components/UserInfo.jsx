function UserInfo({ user }) {
  return (
    <>
      <h2>Customer Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </>
  )
}

export default UserInfo

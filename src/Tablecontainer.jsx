export function Tablecontainer({ userdata, deletefun, editfun }) {
  return (
    <div className="container">
      <div className="table-con">
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th className="text-center" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userdata.length > 0 ? (
              userdata.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editfun(user)}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletefun(user.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No data here</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

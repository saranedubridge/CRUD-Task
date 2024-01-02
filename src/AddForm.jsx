import { useState } from 'react';

export function AddForm({ adduser }) {
  const initialFormState = { id: null, name: '', email: '', location: '' };
  const [user, setUser] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">ADD USER</h1>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (user.name !== '' && user.email !== '' && user.location !== '') {
                    adduser(user);
                    setUser(initialFormState);
                  }
                }}
              >
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    <h6>Name</h6>
                  </label>
                  <input
                    className="form-control"
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                   <h6>Email</h6> 
                  </label>
                  <input
                    className="form-control"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="location">
                   <h6>Location</h6> 
                  </label>
                  <input
                    className="form-control"
                    value={user.location}
                    name="location"
                    onChange={handleChange}
                    type="text"
                    id="location"
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

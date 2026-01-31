import React, { useState, useEffect } from "react";

function Modale() {
  const [githubUser, setGitUser] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((resp) => resp.json())
      .then((data) => {
        setGitUser(data);
      });
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">
              {/* Image */}
              <div className="col-md-4 text-center">
                <img
                  src={githubUser.avatar_url}
                  alt={githubUser.name}
                  className="img-fluid mb-3"
                />
              </div>

              {/* Infos */}
              <div className="col-md-8">
                <p className="border-bottom border-secondary pb-2 mb-3">
                  <i className="bi bi-person me-2"></i>
                  <a
                    href={githubUser.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {githubUser.name}
                  </a>
                </p>
                <p className="border-bottom border-secondary pb-2 mb-3">
                  <i className="bi bi-geo-alt"></i>
                </p>

                <p className="border-bottom border-secondary pb-2 mb-3">
                  <i className="bi bi-card-text me-2"></i>
                  {githubUser.bio}
                </p>

                <p className="border-bottom border-secondary pb-2 mb-3">
                  <i className="bi bi-box me-2"></i>
                  Repositories : {githubUser.public_repos}
                </p>

                <p className="border-bottom border-secondary pb-2 mb-3">
                  <i className="bi bi-people me-2"></i>
                  Followers : {githubUser.followers}
                </p>

                <p>
                  <i className="bi bi-people me-2"></i>
                  Following : {githubUser.following}
                </p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modale;

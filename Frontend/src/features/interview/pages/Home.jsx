import React, { useRef } from "react";
import "../style/interview.form.scss";

const ApplicationPage = () => {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div className="layout-container">

      {/* HEADER */}
      <header className="header">
        <div className="nav-container">

          <div className="logo">
            <div className="logo-icon">
              <span className="material-symbols-outlined">work</span>
            </div>
            <h2>Careers Portal</h2>
          </div>

          <div className="nav-right">
            <nav className="nav-links">
              <a href="#">Jobs</a>
              <a href="#">My Applications</a>
              <a href="#">Resources</a>
            </nav>

            <div className="avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXNf09FFm6K2mz1ZmMUbVQYYvcC0cjVRsDsg0HXUJrBuv6y3D03TcgjWoZ23Qt1s8xmGO1kjh2FBGORm2cXxb41edjgD_vBnq4AppbhjcJrMPkgJl5j3zWa26gASclBo79gryHktQddMfp7AQ7sNb_vUbiK2zhlGoExzVVNM9TjIhcioKPSPmAGm07qDT_jC7MOKuYA7Th1PLR_7cFFiVvA5yILy57kk7ROLgi5MAcqTA-C0BzBGB9gun5wOzL18O4ivDpHvTcMXF"
                alt="profile"
              />
            </div>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="main">

        <div className="page-header">
          <h1>Submit Your Application</h1>
          <p>
            Apply for the Senior Product Designer role. Join our award-winning
            design team.
          </p>
        </div>

        <div className="grid-layout">

          {/* LEFT CARD */}
          <div className="card">

            <h3 className="card-title">

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                accept=".pdf,.doc,.docx,.rtf"
                onChange={handleFileChange}
              />

              {/* Clickable icon */}
              <span
                onClick={handleClick}
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                cloud_upload
              </span>

              Resume File Upload
            </h3>

            <div className="upload-box">

              <div className="upload-icon">
                <span className="material-symbols-outlined">
                  upload_file
                </span>
              </div>

              <p className="upload-title">
                Drag and drop your resume here
              </p>

              <p className="upload-sub">
                PDF, DOCX, or RTF (Max 5MB)
              </p>

              {/* Button also opens file picker */}
              <button
                className="primary-btn"
                onClick={handleClick}
              >
                Browse Files
              </button>

            </div>

            <div className="notes">
              <label>Additional Notes</label>

              <textarea placeholder="Tell us anything else you'd like us to know..."></textarea>
            </div>

            <button className="submit-btn">
              Submit Application
              <span className="material-symbols-outlined">
                send
              </span>
            </button>

          </div>

          {/* RIGHT CARD */}

          <div className="card right-card">

            <div className="card-header">
              <h3>
                <span className="material-symbols-outlined">
                  description
                </span>
                Paste Plain-Text Resume
              </h3>

              <span className="badge">
                Optional Alternative
              </span>
            </div>

            <p className="resume-desc">
              If you're having trouble with the file uploader, you can paste the
              text content of your resume below.
            </p>

            <textarea
              className="resume-text"
              placeholder="Enter the Resume "
            />

          </div>

        </div>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <p>© 2024 Careers Portal. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </footer>

    </div>
  );
};

export default ApplicationPage;
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import VirgiliosResume from "../../../../public/VirgiliosResume.pdf";
import SonysResume from "../../../../public/SonysResume.pdf";
import VirgilioImage from "../../../../public/virgilio-img.png";
import SonyImage from "../../../../public/sony-img.png";

export const About = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [selectedName, setSelectedName] = useState(null);

  const handleResumeClick = (resume, name) => {
    setSelectedResume(resume);
    setSelectedName(name);
    if (window.innerWidth <= 768) {
      window.location.href = resume; // Redirect to the selected resume page
    }
  };

  const handleModalOpen = (resume, name) => {
    setSelectedResume(resume);
    setSelectedName(name);
  };

  const handleModalClose = () => {
    setSelectedResume(null);
    setSelectedName(null);
  };

  return (
    <div className="container about" style={{ marginTop: "70px" }}>
      <h1>
        <Link to={"/"}>
          <i className="bi bi-caret-left"></i>
        </Link>
        About Us
      </h1>
      <p style={{ fontSize: "18px", marginTop: "50px" }}>
        Welcome to Watch &amp; Go, your ultimate destination for discovering,
        organizing, and enjoying your favorite movies and TV shows. At Watch
        &amp; Go, we're passionate about bringing the magic of cinema into your
        home, allowing you to explore an endless universe of entertainment at
        your fingertips.
      </p>
      <h2
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
          textDecoration: "underline",
        }}
      >
        The Development Team
      </h2>
      <div className="row text-center mt-4">
        {/* First Card */}
        <div className="col-md-6 mb-3 mb-md-0">
          <Card className="shadow" style={{ borderRadius: "10px" }}>
            <Card.Title
              style={{
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Virgilio Macero
            </Card.Title>
            <Card.Img
              variant="top"
              src={VirgilioImage}
              alt="Virgilio Macero"
              style={{ height: "350px" }}
            />
            <Card.Body style={{ borderTop: "1px solid #dee2e6" }}>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "5px",
                    }}
                    variant="link"
                    target="__blank"
                    href="https://www.linkedin.com/in/virgilio-macero/"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </Button>
                  <span>
                    <strong>LinkedIn</strong>
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "5px",
                    }}
                    variant="link"
                    onClick={() =>
                      handleResumeClick(VirgiliosResume, "Virgilio Macero")
                    }
                  >
                    <i className="far fa-file-alt fa-2x"></i>
                  </Button>
                  <span>
                    <strong>Resume</strong>
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "5px",
                    }}
                    variant="link"
                    target="__blank"
                    href="https://github.com/VirgilioMacero"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </Button>
                  <span>
                    <strong>Github</strong>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* Second Card */}
        <div className="col-md-6 mb-3 mb-md-0">
          <Card className="shadow" style={{ borderRadius: "10px" }}>
            <Card.Title
              style={{
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Sony Raymond{" "}
            </Card.Title>
            <Card.Img
              variant="top"
              src={SonyImage}
              alt="Sony Raymond"
              style={{ height: "350px" }}
            />
            <Card.Body style={{ borderTop: "1px solid #dee2e6" }}>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "5px",
                    }}
                    variant="link"
                    target="__blank"
                    href="https://www.linkedin.com/in/wilclerson/"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </Button>
                  <span>
                    <strong>LinkedIn</strong>
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "5px",
                    }}
                    variant="link"
                    onClick={() =>
                      handleResumeClick(SonysResume, "Sony Raymond")
                    }
                  >
                    <i className="far fa-file-alt fa-2x"></i>
                  </Button>
                  <span>
                    <strong>Resume</strong>
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Button
                    style={{
                      border: "1px solid #dee2e6",
                      marginBottom: "10px",
                    }}
                    variant="link"
                    target="__blank"
                    href="https://github.com/Wilclerson/"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </Button>
                  <span>
                    <strong>Github</strong>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Resume Modal */}
      <Modal show={selectedResume !== null} onHide={handleModalClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedName}'s Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed
            src={selectedResume}
            type="application/pdf"
            width="100%"
            height="650px"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" href={selectedResume} download>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

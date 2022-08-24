import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Afton</title>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
  />
  <link rel="stylesheet" href="css/mdb.min.css" />
  <link rel="stylesheet" href="css/ftn.css" />
  <link rel="stylesheet" href="css/custom.css" />
  {/* Navigation*/}
  <div className="fixed-top">
    <div className="AftonBgBlue sep2" />
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <span className="ftn35 fblue strong"> A</span>{" "}
            <span className="ftn35 fblue strong"> fton </span>
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                World
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Travel
              </a>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}
          <a className="text-reset me-3" href="#">
            <i className="fas fa-user" />
          </a>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}
  </div>
  <main className="AftonBgGrey">
    <div style={{ height: 110 }} />
    {/* Alpha*/}
    <div className="container">
      <div className="row">
        <div className="col-md-7 box bg-light rounded">
          {" "}
          {/* Right col*/}
          <div className="rounded AftonBgGrey p-2 mt-2">
            <h1 className="strong">
              Lorem Ipsum är en utfyllnadstext från tryck?{" "}
            </h1>
            <div className="sep1 AftonBgBlue" />
            <p>
              Det finns många olika varianter av Lorem Ipsum, men majoriteten av
              dessa har ändrats på någotvis. Antingen med inslag av humor, eller
              med inlägg av ord som knappast ser trovärdiga ut. Skall man
              använda långa stycken av Lorem Ipsum bör man försäkra sig om att
              det inte gömmer sig något pinsamt mitt i texten. Lorem
              Ipsum-generatorer på internet tender
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="photo"
            />
          </div>
          {/* Magazine*/}
          <div className="row">
            <div className="col-md">
              <h4 className="mt-1"> Hiding er sig något .</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1622495805731-eefd22e836f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen rer på internet
                tender
              </p>
            </div>
            <div className="col-md">
              <h4 className="mt-1"> Lömmer sig .</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1626794060904-d15303736722?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                De sig om att det inte gömmer sig något pinsamt mitt i texten.
                Lorem Ipsum-generatorer på internet tender
              </p>
            </div>
            <div className="col-md">
              <h4 className="mt-1">humor, eller med i</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1626725100930-2b00007c9379?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen med inslag av humor,
                eller med inlägg av ord som knappast ser trovärdiga ut.
              </p>
            </div>
          </div>
          {/* ////Magazine*/}
          {/*-Alert*/}
          <div
            className="alert alert-primary border-left-2 border-danger card"
            role="alert"
          >
            <span className="strong"> LATEST: </span> A simple primary
            alert—check
          </div>
          <div className="alert alert-secondary card" role="alert">
            <span className="strong"> LATEST: </span>A simple primary
            alert—check t!
          </div>
          {/*-End Alert*/}
          {/* Magazine 2*/}
          <div className="row">
            <div className="col-md">
              <h4 className="mt-1">humor, eller med i</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1626725100930-2b00007c9379?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen med inslag av humor,
                eller med inlägg av ord som knappast ser trovärdiga ut.
              </p>
            </div>
            <div className="col-md">
              <h4 className="mt-1"> Hiding er sig något .</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1622495805731-eefd22e836f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen rer på internet
                tender
              </p>
            </div>
          </div>
          {/* ////Magazine 2*/}
          {/* Magazine  3*/}
          <div className="row">
            <div className="col-md">
              <h4 className="mt-1">humor, eller med i</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1626725100930-2b00007c9379?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen med inslag av humor,
                eller med inlägg av ord som knappast ser trovärdiga ut.
              </p>
            </div>
            <div className="col-md">
              <h4 className="mt-1"> Hiding er sig något .</h4>
              <img
                className="mig_responsive rounded my-1 "
                src="https://images.unsplash.com/photo-1622495805731-eefd22e836f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <p>
                Det finns många olika varianter av Lorem Ipsum, men majoriteten
                av dessa har ändrats på någotvis. Antingen rer på internet
                tender
              </p>
            </div>
            {/*Section: Content*/}
            <section>
              <div className="row">
                <div className="col-md-6 gx-5 mb-4">
                  <div
                    className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/slides/031.jpg"
                      className="img-fluid"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 gx-5 mb-4">
                  <h4>
                    <strong>Facilis consequatur eligendi</strong>
                  </h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis consequatur eligendi quisquam doloremque vero ex
                    debitis veritatis placeat unde animi laborum sapiente illo
                    possimus, commodi dignissimos obcaecati illum maiores
                    corporis.
                  </p>
                  <p>
                    <strong>Doloremque vero ex debitis veritatis?</strong>
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod itaque voluptate nesciunt laborum incidunt. Officia,
                    quam consectetur. Earum eligendi aliquam illum alias, unde
                    optio accusantium soluta, iusto molestiae adipisci et?
                  </p>
                </div>
              </div>
            </section>
            {/*Section: Content*/}
            <hr className="my-5" />
            {/*Section: Content*/}
            <section className="text-center">
              <h4 className="mb-5">
                <strong>Facilis consequatur eligendi</strong>
              </h4>
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                        className="img-fluid"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)"
                          }}
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                    <div className="card-text">
                    Some quick example text to build on the card title and
                    make up the bulk of the cards content.
                    </div>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                        className="img-fluid"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)"
                          }}
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                        className="img-fluid"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)"
                          }}
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*-Pagin...*/}
            <div
              className="alert alert-primary border-left-2 border-danger card"
              role="alert"
            >
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*-//////////// Pagin...*/}
          </div>
          {/* ////Magazine 3*/}
        </div>{" "}
        {/* // Right col*/}
        {/*  right 1 col*/}
        <div className="col-md-3 bg-light box">
          {" "}
          {/*  right 1 col*/}
          <div className="rounded AftonBgGrey p-2 mt-2">
            <h2> Lorem Ipsum </h2>
            <div className="sep1 AftonBgBlue" />
            <p>
              {" "}
              I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa
              ord. Det har sina rötter i ett stycke klassiskt litteratur på
              latin från 45 år före år 0,{" "}
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1626727029134-ca085f394a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            />
          </div>
          <hr />
          {/*  Reklam*/}
          <div className="bg-warning rounded p-2">
            <h2> Kosarna äter ipsum </h2>
            <div className="sep1 AftonBgBlue" />
            <p>
              {" "}
              I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa
              ord. Det har sina rötter i ett stycke klassiskt litteratur på
              latin från 45 år före år 0,{" "}
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1626727029134-ca085f394a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            />
            <div style={{ height: 100 }} />
          </div>
          {/*  /Reklam*/}
          {/*  Reklam*/}
          <div className="bg-warning rounded p-2">
            <h2> Et harum quidem </h2>
            <div className="sep1 AftonBgBlue" />
            <p>
              {" "}
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. Temporibus autem
              quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
              aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat{" "}
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1626735245701-daef2ab509ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <div style={{ height: 100 }} />
          </div>
          {/*  /Reklam*/}
        </div>
        {/*  right 1 col*/}
        {/*  /////right 1 col*/}
        {/*  /////right 22222 col*/}
        <div className="col-md-2 box bg-light">
          {/*  Reklam*/}
          <div className="rounded AftonBgGrey p-2 mt-2">
            <h2> On the other hand </h2>
            <div className="sep1 AftonBgGrey" />
            <p>
              {" "}
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is t{" "}
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1626709694505-76cbb919f6f3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          {/*  /// Reklam*/}
          {/*  Reklam*/}
          <div className="bg-info rounded p-2">
            <h2> On the other hand </h2>
            <div className="sep1 AftonBgGrey" />
            <p>
              {" "}
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is t{" "}
            </p>
            <img
              className="mig_responsive rounded"
              src="https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          {/*  /// Reklam*/}
        </div>
      </div>
      {/* //Alpha*/}
    </div>
  </main>
  <footer className="bg-dark mt-1 text-light">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 p-2 mt-2">
          <h1> Kontakta oss </h1>
          <div className="sep1 bg-info" />
          <p>
            {" "}
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best,
          </p>
        </div>
        <div className="col-sm-4 p-2 mt-2">
          <h1> Tipsa oss </h1>
          <div className="sep1 bg-info" />
          <p>
            {" "}
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best,
          </p>
        </div>
        <div className="col-sm-4 p-2 mt-2">
          <h1> Om oss </h1>
          <div className="sep1 bg-info" />
          <p>
            {" "}
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best,
          </p>
        </div>
      </div>
    </div>
  </footer>

  
<script src="js/mdb.min.js" async></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" async></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" async></script>

    
</>

  )
}

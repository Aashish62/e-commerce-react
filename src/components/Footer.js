
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark text-light px-2">
    <p className="col-md-4 mb-0">© 2023 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-light">
    Website
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
    </ul>
  </footer>
  )
}

export default Footer
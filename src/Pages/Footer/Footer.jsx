const Footer = () => {
  return (
    <footer className="footer p-10 bg-gradient-to-r from-green-100 to-blue-100  text-base-content rounded-sm">
      <aside>
        <img
          className="w-32 rounded-xl"
          src="https://i.ibb.co/yFXMSXY/images-9.jpg"
          alt=""
        />
        <p className="font-semibold">
          Cafe Bite Industries Ltd.
          <br />
          Providing reliable tech since 2000
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

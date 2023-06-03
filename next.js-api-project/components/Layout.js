const Layout = ({ children }) => {
    return (
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;
import { Navbar, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="secondary">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Username" id="basic-nav-dropdown">
              <NavDropdown.Item href="/post/create">Tạo Sản Phẩm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sửa Sản Phẩm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Đăng Xuất</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar className='header-bg' variant='dark' expand='lg' sticky='top'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mx-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
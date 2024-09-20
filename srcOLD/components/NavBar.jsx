import '../css/NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MyNav = () => {
    return ( 
        <>
            <table className='table-header'>
                <tr>
                    <td className='header-logo' align='center'>
                        <img src={logo} />
                    </td>
                    <td className='link-nav'>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black', backgroundColor: '#ff6d6d', fontSize: '32px' }}>Home</Link>
                    </td>
                    <td className='link-nav'>
                    <Link to='/search' style={{ textDecoration: 'none', color: 'black', backgroundColor: '#ff6d6d', fontSize: '32px'   }}>eAmbulance Type</Link>
                    </td>
                    <td className='link-nav'>
                        <Link to='/gallery' style={{ textDecoration: 'none', color: 'black', backgroundColor: '#ff6d6d', fontSize: '32px'   }}>Gallery</Link>
                    </td>
                    <td className='link-nav'>
                        <Link to='/about' style={{ textDecoration: 'none', color: 'black', backgroundColor: '#ff6d6d', fontSize: '32px'   }}>About Us</Link>
                    </td>
                    <td className='link-nav'>
                    <Link to='/feedback' style={{ textDecoration: 'none', color: 'black', backgroundColor: '#ff6d6d', fontSize: '32px'   }}>Feedback</Link>
                    </td>
                </tr>
            </table>
        </>
     );
}
 
export default MyNav;
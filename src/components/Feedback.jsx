import '../css/Feedback.css'
import MyNav from "./NavBar";
import Footer from '../components/footer'
import StarRating from './StarRating';
const Feedback = () => {
    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg">
                <div>
                    <br />
                    <h2 align='center' style={{ fontSize: "80px" }}>Feedback and Rate</h2>
                    <br />
                </div>
                <table className='feedback' align='center'>
                    <tr className='data'>

                        <th>Rating</th>
                        <th>Feedback</th>
                    </tr>
                    <tr className='data'>

                        <td className='rating'>★★★★★</td>
                        <td>Excellent ambulance service!</td>
                    </tr>
                    <tr className='data'>

                        <td className='rating'>★★★★<b className='motnua'>★</b></td>
                        <td>Great experience, but arrived a bit late.</td>
                    </tr>
                    <tr className='data'>

                        <td className='rating'>★★★<b className='motnua'>★</b></td>
                        <td>Decent service, but could be improved.</td>
                    </tr>
                    <tr className='data'>

                        <td className='rating'>★★★★★</td>
                        <td>Very fast</td>
                    </tr>
                    <tr className='data'>

                        <td className='rating'>★★★★</td>
                        <td>Great!!!</td>
                    </tr>
                    <tr>
                        <td className='user' >Rating: </td>
                        <td>
                            <StarRating />
                        </td>
                    </tr>
                    <tr>
                        <td className='user'>Feedback: </td>
                        <td>
                            <textarea placeholder=' Enter your feedback' className='textarea' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='buttonsend'>Send</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Feedback;
import '../css/Feedback.css'
import MyNav from "./NavBar";
import Footer from '../components/footer'
const Feedback = () => {
    return ( 
        <>
        <div className="bg">
        <div>
                <MyNav/>
            </div>
            <div>
                <h1>Feedback and Rate</h1>
            </div>
            <table className='table table-bordered tablePhat' align='center'>
                <tr className='data'>
                    <th>ID</th>
                    <th>Rating</th>
                    <th>Feedback</th>
                </tr>
                <tr className='data'>
                    <td>1</td>
                    <td>5</td>
                    <td>Excellent ambulance service!</td>
                </tr>
                <tr className='data'>
                    <td>2</td>
                    <td>4</td>
                    <td>Great experience, but arrived a bit late.</td>
                </tr>
                <tr className='data'>
                    <td>3</td>
                    <td>3</td>
                    <td>Decent service, but could be improved.</td>
                </tr>
                <tr className='data'>
                    <td>4</td>
                    <td>5</td>
                    <td>Very fast</td>
                </tr>
                <tr className='data'>
                    <td>5</td>
                    <td>4</td>
                    <td>Great!!!</td>
                </tr>
                <tr>
                    <td align='right'>Rating: </td>
                    <td colSpan={2}>
                        <input placeholder='Enter your rating 1-5'/>
                    </td>
                </tr>
                <tr>
                    <td align='right'>Feedback: </td>
                    <td colSpan={2}>
                       <textarea placeholder='Enter your feedback'/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button>Send</button>
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
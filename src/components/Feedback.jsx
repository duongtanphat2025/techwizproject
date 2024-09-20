import '../css/Feedback.css'
import MyNav from "./NavBar";
import Footer from '../components/footer'
import StarRating from './StarRating';

const Feedback = () => {
    const kiemtra = (e) => {
        e.preventDefault(); // Prevent form submission
        var Name = document.getElementById("txtName").value;
        if (Name === "") {
            alert("Name cannot be left empty!");
            document.getElementById("txtName").focus();
            return false;
        }
        var Mail = document.getElementById("txtMail").value;
        if (Mail == "") {
            alert("Email cannot be left empty!");
            document.getElementById("txtMail").focus();
            return false;
        }
        var Cmt = document.getElementById("txtCmt").value;
        if (Cmt === "") {
            alert("Feedback cannot be left empty!");
            document.getElementById("txtCmt").focus();
            return false;
        }
        document.getElementById("txtName").value = "";
        document.getElementById("txtMail").value = "";
        document.getElementById("txtCmt").value = "";

        alert("Feedback has been sent, thank you.");
        
    }

    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg">
                <form onSubmit={kiemtra}>
                    <div>
                        <br />
                        <h2 align='center' style={{ fontSize: "80px" }}>Feedback and Rate</h2>
                        <br />
                    </div>
                    <div className="feedback-container">
                        <div className="form-group">
                            <label className="control-label col-lg-3">Name:</label>
                            <div className="col-lg-7">
                                <input className="form-control" id='txtName'
                                    placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-lg-3">Email:</label>
                            <div className="col-lg-7">
                                <input type="email" className="form-control" id='txtMail'
                                    placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-lg-3">Feedback:</label>
                            <div className="col-lg-7">
                                <textarea id='txtCmt' className="form-control" rows={5} style={{ resize: 'both' }} placeholder='Enter your feedback' />
                            </div>
                        </div>

                        <label>Rating:</label>
                        <StarRating />
                        <br />

                        <button className="btn btn-success buttonsend">Send</button>
                    </div>
                    <br />
                    <div style={{padding:"5%"}}>
                    <table className='table table-bordered rate' align='center'>
                        <thead>
                            <tr >
                                <th className='user'>Rating</th>
                                <th className='user'>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{color: 'yellow'}} className='rating'>★★★★★</td>
                                <td >Excellent ambulance service!</td>
                            </tr>
                            <tr >
                                <td style={{color: 'yellow'}} className='rating'>★★★★</td>
                                <td>Great experience, but arrived a bit late.</td>
                            </tr>
                            <tr >
                                <td style={{color: 'yellow'}} className='rating'>★★★</td>
                                <td>Decent service, but could be improved.</td>
                            </tr>
                            <tr >
                                <td style={{color: 'yellow'}} className='rating'>★★★★★</td>
                                <td>Very fast</td>
                            </tr>
                            <tr >
                                <td style={{color: 'yellow'}} className='rating'>★★★★</td>
                                <td>Great!!!</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </form>
                <br />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Feedback;

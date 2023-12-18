import React from 'react'

const Profile: React.FC = () => {


    return (
        <>
        
        
            <div className="container-fluid mt-3">

                <div className="row mb-5">
                    <div className="col-md-5 d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Profile</h6>
                    </div>
                </div>

                <div className="row align-items-center mb-5 p-4 py-5 shadow rounded">
                    <div className="col-md-3 d-flex flex-column">
                        <a href="" className="">
                            <img className="profilePageImg rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                        </a>
                        
                        <button className="btn btn-secondary btn-sm mt-3">Edit Profile</button>
                    </div>

                    <div className="col d-flex flex-column">
                        <h2>Rohan Mostofa Abir</h2>
                        <span>example@gmail.com</span>
                        <span>Address: <span>Krishnapur, Chachuri Purulia, Kalia</span>,<br/>
                        <span> Narail, Khulna, Bangladesh</span></span>
                        <div className="mt-3 pt-3 d-flex justify-content-start align-items-center break gap-5">
                            <div className="d-flex justify-content-start flex-column text-center">
                                <h1>10K</h1>
                                <span>Followers</span>
                            </div>
                            <div className="d-flex justify-content-start flex-column text-center">
                                <h1>50</h1>
                                <span>Questions</span>
                            </div>
                            <div className="d-flex justify-content-start flex-column text-center">
                                <h1>35</h1>
                                <span>Answers</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        
        </>
    )
}

export default Profile;


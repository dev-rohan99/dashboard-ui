import React from 'react';
import { Link } from 'react-router-dom';
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { BsSendCheck } from 'react-icons/bs';


const Inbox: React.FC = () => {



    return (
        <>
        

            <div className="container-fluid mt-3">

                <div className="row mb-2">
                    <div className="col d-flex align-items-center justify-content-start">
                        <h6 className="subtitle">Home - Inbox</h6>
                    </div>
                </div>

                <div className="row mb-5 rounded shadow-lg overflow-hidden">

                    <div className="col-md-3 py-3 inboxSidebarWrap">
                        <ul className="p-0 m-0 list-unstyled">

                            <li className="mb-2">
                                <Link to="" className="p-2 d-block rounded inboxPeople active">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img className="profileTwo rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                        <div style={{marginLeft:"9px"}} className="">
                                            <h6 className="m-0">Rohan Mostofa</h6>
                                            <span>example@gmail.com</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link to="" className="p-2 d-block rounded inboxPeople">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img className="profileTwo rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                        <div style={{marginLeft:"9px"}} className="">
                                            <h6 className="m-0">Rohan Mostofa</h6>
                                            <span>example@gmail.com</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="col-md-9 p-3 position-relative">

                        <div className="messagesWrap">
                            <div className="d-flex justify-content-start align-items-start mb-3 mt-2">
                                <Link to="" className="rounded">
                                    <img className="profileTwo rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                </Link>
                                <div className="rounded textMessageOpponent p-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi reprehenderit incidunt culpa adipisci aut odio nam molestiae voluptates architecto beatae, repellat error iste, mollitia obcaecati quidem magnam provident hic.
                                </div>
                            </div>

                            <div className="d-flex justify-content-end align-items-start">
                                <div className="rounded textMessageMe p-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi reprehenderit incidunt culpa adipisci aut odio nam molestiae voluptates architecto beatae.
                                </div>
                                <Link to="" className="rounded">
                                    <img className="profileTwo rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="position-absolute messageSendBox p-2 rounded">
                            <label>
                                <div className="d-flex justify-content-center align-items-center galary shadow">
                                    <VscFileSymlinkDirectory className="text-white" style={{fontSize: "20px"}} />
                                    <input accept="jpg,mp4,jpeg,png" type="file" id="filesSend" hidden />
                                </div>
                            </label>

                            <input type="text" className="form-control" placeholder="Type your message . . ." />

                            <div>
                                <a href="#" className="d-flex justify-content-center align-items-center messageSend shadow">
                                    <BsSendCheck className="text-white" style={{fontSize: "20px"}} />
                                </a>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
            
        
        </>
    )
}

export default Inbox;

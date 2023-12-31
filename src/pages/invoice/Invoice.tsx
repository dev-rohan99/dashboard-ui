import React, { useEffect } from 'react';


const Invoice: React.FC = () => {

    useEffect(() => {
        const print = document.querySelector('.printBtn');
        const media = window.matchMedia('print');

        const update = (e: MediaQueryListEvent) => {
            if (print instanceof HTMLElement) {
                print.style.display = e.matches ? 'none' : 'block';
            }
        };

        const convert = () => {
            media.addEventListener('change', update, false);
            window.print();
        };

        if (print instanceof HTMLElement) {
            print.addEventListener('click', convert, false);
        }

        return () => {
            if (print instanceof HTMLElement) {
                print.removeEventListener('click', convert, false);
            }
            media.removeEventListener('change', update, false);
        };
    }, []);

    return (
        <>
        
        
            <div className="container-fluid mt-3">

                <div className="row mb-2">
                    <div className="col d-flex align-items-center justify-content-between">
                        <h6 className="subtitle">Home - Invoices - Invoice</h6>

                        <button className="btn btn-danger btn-sm printBtn">Print</button>
                    </div>
                </div>

                <div className="row mt-3 justify-content-center my-4">
                    <div id="invoicePrintable" className="col-md-10 inVoiceWrap shadow-lg py-3">
                        <header>
                            <h1 className="py-3">Invoice</h1>
                            <address contentEditable>
                                <p>Jonathan Neal</p>
                                <p>101 E. Chapman Ave<br/>Orange, CA 92866</p>
                                <p>(800) 555-1234</p>
                            </address>
                            <span>
                                <img alt="" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg"/>
                                <input type="file" accept="image/*"/>
                            </span>
                        </header>

                        <article>
                            {/* <h1>Recipient</h1> */}
                            <address contentEditable>
                                <figcaption style={{fontSize:"14px"}} className="blockquote-footer">Address: Krishnapur, Chachuri Purulia, <br/> Kalia, Narail, Khulna, Bangladesh</figcaption>
                            </address>
                            <table className="meta">
                                <tr>
                                    <th><span contentEditable>Invoice #</span></th>
                                    <td><span contentEditable>101138</span></td>
                                </tr>
                                <tr>
                                    <th><span contentEditable>Date</span></th>
                                    <td><span contentEditable>January 1, 2012</span></td>
                                </tr>
                                <tr>
                                    <th><span contentEditable>Amount Due</span></th>
                                    <td><span id="prefix" contentEditable>$</span><span>600.00</span></td>
                                </tr>
                            </table>
                            <table className="inventory">
                                <thead>
                                    <tr>
                                        <th><span contentEditable>Item</span></th>
                                        <th><span contentEditable>Description</span></th>
                                        <th><span contentEditable>Rate</span></th>
                                        <th><span contentEditable>Quantity</span></th>
                                        <th><span contentEditable>Price</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a className="cut">-</a><span contentEditable>Front End Consultation</span></td>
                                        <td><span contentEditable>Experience Review</span></td>
                                        <td><span data-prefix>$</span><span contentEditable>150.00</span></td>
                                        <td><span contentEditable>4</span></td>
                                        <td><span data-prefix>$</span><span>600.00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <a className="add">+</a>
                            <table className="balance">
                                <tr>
                                    <th><span contentEditable>Total</span></th>
                                    <td><span data-prefix>$</span><span>600.00</span></td>
                                </tr>
                                <tr>
                                    <th><span contentEditable>Amount Paid</span></th>
                                    <td><span data-prefix>$</span><span contentEditable>0.00</span></td>
                                </tr>
                                <tr>
                                    <th><span contentEditable>Balance Due</span></th>
                                    <td><span data-prefix>$</span><span>600.00</span></td>
                                </tr>
                            </table>
                        </article>

                        <aside>
                            <h1 className='py-3'><span contentEditable>Additional Notes</span></h1>
                            <div contentEditable>
                                <span>A finance charge of 1.5% will be made on unpaid balances after 30 days.</span>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Invoice;

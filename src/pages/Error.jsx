import React from "react";
import { Link } from "react-router-dom";
import imgError from "../../src/img/404-error.webp";
import  "../../src/sass/error.scss";

/* Error page if user uses unknown route */
function Error () {
    return (
        <div className="error-page">
            <main>
                <section className="error">
                    <h2 className="sr-only">Error 404</h2>
                    <img src={imgError} alt="error 404" className="page-error"/>
                    <p className="text-error">The requested page doesn't exist...</p>
                    <p className="text-error">Please return to homepage</p>
                    < Link to="/">
                        <button className="button-404">Back to the homepage</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}

export default Error
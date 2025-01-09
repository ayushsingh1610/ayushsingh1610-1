import React from "react";

function Footer() {
  return (
    <footer className="text-neutral-300 body-font">
        <div className="flex flex-col sm:flex-row justify-between items-start md:items-center mx-8 sm:mx-16 md:mx-36 mt-36 mb-8 gap-16">
            <div className="text-xl font-semibold">Ayush Singh</div>
            <div>
                <ul className="flex flex-col sm:flex-row justify-evenly items-start md:items-center gap-2 md:gap-8">
                    <li />
                    <a href="">Github</a>
                    <li />
                    <a href="">LinkedIn</a>
                    <li />
                    <a href="">X(Twitter)</a>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

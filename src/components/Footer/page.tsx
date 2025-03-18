export default function Footer_Page() {
    return (
        <>
            <footer className="bg-gray-300 p-2 text-black"  > 
               
             <div className="flex flex-row gap-30 items-center justify-center">
                <nav className=" flex flex-col m-4">
                    <header className="font-bold text-[20px]">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className=" flex flex-col m-4">
                    <header className="font-bold text-[20px]">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
              
                </nav>
            
                <form className=" flex flex-col m-4">
                    <header className="font-bold text-[20px]">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span>Enter your email address</span>
                        </label>
                        <div className="flex items-center gap-4 mt-2">
                            <input type="text" placeholder="username@site.com" className="border-2 rounded-md p-2" />
                            <button className="text-black bg-gray-500 p-2 rounded-md">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
                </div>
            </footer>
            <footer className="footer footer-center bg-gray-600 text-center text-white p-1">
                <aside>
                    <p>Copyright © {new Date().getFullYear()-1} - All rights reserved by ARS Algo Trading Ltd</p>
                </aside>
            </footer>
        </>
    );
}

import back from '../assets/Speaker-5.jpg'
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${back})` }}>
                <div className="hero-overlay bg-opacity-20"></div>

                <div className="sm:w-[23.5rem] lg:w-[53.5rem] shadow-2xl bg-transparent">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered lg:px-[20rem]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered lg:px-[20rem]" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <input type="text" name="" placeholder="Send us Message" className="input input-bordered lg:px-[20rem]" required />

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-sky-900 text-white border-none">Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
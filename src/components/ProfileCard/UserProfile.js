// import ProfileInfo from './ProfileInfo';
// import ProfileAbout from './ProfileAbout';
// import ProfileFooter from './ProfileFooter';
import profileImg from '../../images/me.jpg';

function UserProfile() { 
    return(
        <div className="py-10 px-10 rounded-xl flex flex-col justify-center items-center text-gray-600 bg-gray-100">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                <img src={profileImg} alt="me" className="transition-all hover:scale-110"/>
            </div>
            <h3 className="mt-4 font-bold text-xl text-gray-900">Liutauras M <i class="fa-solid fa-square-check text-cyan-500"></i></h3>
            <p className="text-sm text-gray-500">@lmorkaitis888</p>
            <p className="mt-4 text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus blandit nibh lectus eget leo.</p>
            <ul className="w-full mt-4">
                <li>
                    <i class="fa-solid fa-location-dot mb-3 w-8 text-cyan-500"></i>
                    <span>Mars</span>
                </li>
                <li>
                    <i class="fa-solid fa-globe mb-3 w-8 text-cyan-500"></i>
                    <span>l.morkaitis@gmail.com</span>
                </li>
                <li>
                    <i class="fa-solid fa-calendar mb-3 w-8 text-cyan-500"></i>
                    <span>Last active: May 10th</span>
                </li>
                <li>
                    <i class="fa-solid fa-image w-8 text-cyan-500"></i>
                    <span>156 photos in Gallery</span>
                </li>
            </ul>
            <button className=" mt-8 py-4 px-6 rounded-full transition-all text-white bg-gray-800 hover:bg-gray-900">View Profile</button>
        </div>
    );
 }

 export default UserProfile;
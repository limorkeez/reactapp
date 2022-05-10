function MainSection() { 
    return(
        <main className='px-8'>
            <h3 className="text-white text-4xl font-bold py-16">Fun facts about React</h3>
            <ul className="text-white text-lg ml-8 list-disc marker:text-cyan-400">
                <li className="mb-2">Was first released in 2013</li>
                <li className="mb-2">Was originally created by Jordan Walke</li>
                <li className="mb-2">Has well over 100K start on Github</li>
                <li className="mb-2">Is maintained by Facebook</li>
                <li className="mb-2">Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
 }

 export default MainSection;
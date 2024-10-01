 
//   const constant= "This approach ensures that even if a project description is missing, the paragraph element won't be empty and provides informative feedback to the user"

 

//   const ProjectCard = ({ project }) => {
  
      
  
//       // Sort the filtered projects based on the "sequence" field
  
  
//       return (

            

//   <div className="md:mx-auto sm:mx-20 my-5 p-4 justify-center items-center transform transition-all duration-300 hover:scale-105 group rounded-md hover:bg-gray-400 shadow-md bg-white border border-gray-200 hover:font-bold   ">
//   <div className="relative overflow-hidden rounded-md  ">
//         <img className="h-45 w-full object-cover rounded-t-md" src={project.image.url} alt={project.title} />
        
       
//    </div >
//        {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"> */}
//        <h1 className="font-bold text-lg  text-blue-900">{project.title}</h1>
//           <h5 className="text-sm text-gray-900">TechStack: {project.techStack.join(" , ")}</h5>
        
//        <p className="p-2  text-sm text-gray-700">{project.description ? project.description : constant}</p>
//         <div className='flex justify-between py-2 '>
//       <a href=  {project.githuburl ? project.githuburl : "https://github.com"}target="_blank" rel="noopener noreferrer" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
// <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9H2v10h2m2-10h10a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2z"></path>
// </svg>GitHub</a>

// <a  href={project.liveurl ? project.liveurl : "https://google.com"} target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
// <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//  </svg>Live</a>
// </div> 
//      </div>


// //         <div className=" ">
// //           <h1 className="text-bold">Rakesh</h1>
// //   <div className="overflow-hidden rounded-t-md">
// //     <img className="h-" src={project.image.url} alt={project.title} />
// //   </div>
// //   <div className="p-4">
// //     <h1 className="font-bold text-lg text-blue-900">{project.title}</h1>
// //     <h5 className="text-sm text-gray-900">TechStack: {project.techStack.join(", ")}</h5>
// //     <p className="text-sm text-gray-700 mt-2">{project.description || "No description available"}</p>
// //   </div>
// // </div>

  
  
  
       
  
  
  
  
  
  
         
         
  
//        );
//      };
  
  
//      export default ProjectCard;
import {project, resource, inspiration, section} from './lumenContent.js';
function App() {
  return (
    <>
      <h2 className='text-black'>{section.hero}</h2>
      <h1 className="text-7xl font-bold text-black text-center my-40">Lumen Project Started</h1>
      <div className="h-full w-full flex gap-10 flex-col justify-center items-center">
        {project.map((project, index)=>(
            <h2 className='text-black' key={index}>{project.name}</h2>
        ))}
        {resource.map((res, index)=>(
            <h2 className='text-black' key={index}>{res.name}</h2>
        ))}
      </div>
    </>
  )
}

export default App

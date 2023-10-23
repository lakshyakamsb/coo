import React from 'react';
const Project = () => {
    const divStyle = {
        marginTop: '150px',
      };
  const projects = [
    {
      title: 'House of Shri ABC',
      imagePath: `${process.env.PUBLIC_URL}/image/Projects1.jpg`,
    },
    {
        title: 'House of Shri XYZ from Delhi',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects2.jpg`,
      },
    {
        title: 'Resort Hotel of Shri KDP from Delhi',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects3.jpg`,
      },
      {
        title: 'Resort Hotel of Shri MDK from Noida, UP',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects4.jpg`,
      },
      {
        title: 'Resort Hotel of Shri BKM from Delhi',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects5.jpg`,
      },
      {
        title: 'House of Shri XYZ',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects6.jpg`,
      },
      {
        title: 'House of Shri DS Rawat',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects7.jpg`,
      },
      {
        title: 'House of Shri LS Bisht',
        imagePath: `${process.env.PUBLIC_URL}/image/Projects8.jpg`,
      },
  ];

  return (
    <div className="container bg-danger.bg-gradient" style={divStyle}>
        
      <h1 className="text-center mt-5">Our Recent Projects</h1>
      
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mt-4">
            <div className="card">
              <img src={project.imagePath} className="card-img-top" alt={project.title} style={{ width: '100%', height: '200px' }}  />
              <div className="card-body" style={{ backgroundColor: '#E70615' }}>
                <h5 className="card-title" >{project.title}</h5>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;



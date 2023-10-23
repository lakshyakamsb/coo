import React, { useState } from 'react';

const Service = () => {
  const divStyle = {
    marginTop: '150px',
  };

  const services = [
    // Your services data...
    {
        title: 'Building Plan, Approval & 3D Elevation',
        description: 'We provide Building plan, Approval & 3D Elevation services that are dedicated to all types of building construction projects including residential, commercial, industrial buildings...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card8.jpg`,
    },
    {
        title: 'Residential Development',
        description: 'The Trinetra Group, the most trusted construction company in all Kumaon District in Uttarakhand, we listen to your needs and come up with the perfect plan and solutions...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card7.jpg`,
    },
    {
        title: 'Commercial Development',
        description: 'Our mission is to provide the best facilities and services to our customers in reducing their pains in doing commercial activities in a Resorts, Hotels, Hospital and Shopping complex...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card6.jpg`,
    },
    {
        title: 'Government Construction',
        description: 'We are registered government contractor for Canal, PWD, Irrigation etc. Our mission is to engage in issues that are of concern to individuals, families and communities...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card5.jpg`,
    },
    {
        title: 'Interior Design',
        description: 'We develop interior and exterior design. Our experiences that are distinctive, compelling and of superb quality and individuality...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card4.jpg`,
    },
    {
        title: 'Modular Kitchen',
        description: 'With the help of our expert professionals, we are providing our customers with the best Kitchen Interior designs and solutions...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card3.jpg`,
    },
    {
        title: 'Modern Bathroom',
        description: 'We are bringing you bathroom interior designs that are functional and also stylish. Whether you’re looking for a small bathroom or spacious bathroom...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card2.jpg`,
    },
    {
        title: 'Modern Terrace Garden',
        description: 'We are providing the best Modern Terrace Garden. Unwind In Style with A Modern Terrace Garden...',
        imagePath: `${process.env.PUBLIC_URL}/image/Card1.jpg`,
    },
  ];

  const [expandedServices, setExpandedServices] = useState({});
  
  // Function to toggle expansion for a service
  const toggleExpandedService = (index) => {
    setExpandedServices((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index]
    }));
  };

  return (
    <div className="container" style={divStyle}>
      <h1 className="text-center mt-5">Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 mt-4">
            <div className="card">
              <img
                src={service.imagePath}
                className="card-img-top"
                alt={service.title}
                style={{ width: '100%', height: '200px' }}
              />
              <div className="card-body" style={{ backgroundColor: '#E70615' }}>
                <h5 className="card-title">{service.title}</h5>
                {expandedServices[index] ? (
                  <p className="card-text">{service.description}</p>
                ) : (
                  <p className="card-text">
                    {service.description.substring(0, 90)}...
                  </p>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => toggleExpandedService(index)}
                >
                  {expandedServices[index] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

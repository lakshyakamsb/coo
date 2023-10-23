import React, { useState } from 'react'

const Home = () => {
    const imageStyle = {
        width: '100%', // Set the desired width
        height: '300px', // Set the desired height
      };
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
    <div className='container'>
       <div className="row" style={divStyle}>
    <div className="col-lg-8 mx-auto">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  style={{marginTop: '10px'}}>
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={imageStyle} src={`${process.env.PUBLIC_URL}/image/Card1.jpg`} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img style={imageStyle} src={`${process.env.PUBLIC_URL}/image/Card3.jpg`} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img style={imageStyle} src={`${process.env.PUBLIC_URL}/image/Card2.jpg`} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>



  <div className="container mt-5" >
      <h1 className="text-center">About Us</h1>
      <p>
        Trinetra Contractors and Builders is the Largest integrated and Native Origin Architectural, Construction, and Real Estate Developer company in Uttarakhand headquartered at Mukteshwar, Nainital, Uttarakhand. We are also listed as a contractor with multiple government departments, state governments, and civic agencies, and the distinction enables us with a high success rate of selection at the pre-qualification stage of projects.
      </p>
      <p>
        We Design, Build, and Transfer Infrastructure, Residential, and Commercial construction works. We believe in Quality and Efficient work. From Traditional to Modern to Fusions, we can Design any type of building architecture and Built whether it be Commercial or Residential with complete Engineering Guidance.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to perform for our customers the highest level of quality Construction, Real Estate, and Engineering Consulting services at fair and market competitive prices to ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail, and service-minded attitudes. To maintain the highest levels of professionalism, integrity, honesty, and fairness in our relationships with our suppliers, subcontractors, professional associates, and customers.
      </p>
      <h2>What We Do?</h2>
      <p>
        We are offering Engineering / Architectural Services, Construction services in terms of Interior Exterior design, Preliminary Design, Renovation, Residential and commercial Construction, Project Management, Real Estate Services in Terms of Land, Property Buy/Sell in Hill's Areas of Uttarakhand and Resort, Private Cottages Design, Build, Operate and Transfer direct to our customers.
      </p>
      <h2>Our Team</h2>
      <ul>
        <li>Trinetra Kumar - Managing Director (10 plus years of experience in construction)</li>
        <li>Pawan Lohani - Director (15 plus years of experience in construction)</li>
        <li>Kamal Joshi - Director (10 plus years of experience in Civil Engineering)</li>
      </ul>
    </div>



    <div className="container">
      <h1 className="text-center mt-5"> OUR Services</h1>
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

    <div className="container bg-danger.bg-gradient">
      <h1 className="text-center mt-5">Our Recent Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mt-4">
            <div className="card">
              <img src={project.imagePath} className="card-img-top" alt={project.title}  style={{ width: '100%', height: '200px' }} />
              <div className="card-body" style={{ backgroundColor: '#E70615' }}>
                <h5 className="card-title" >{project.title}</h5>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</div>
    
  )
}

export default Home

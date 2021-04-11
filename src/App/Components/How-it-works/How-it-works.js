import React from "react"


const data = [
  {
    title:'Farmer Create Project',
    value:'Are you looking for an investor for cultivation? \n You can add details of the farm, land information, crops planning to cultivate, required amount of investment etc',
    image:'https://image.freepik.com/free-vector/nature-scene-rural-land-agriculture-grassland-abtract-silhouette-asian-farmers-working-rice-field-illustration_1150-37317.jpg'
  },
  {
    title:'FarmDigital team Evaluation',
    value:'Project verification process, check the data submitted at the time of project creation is valid or not',
    image:'https://image.freepik.com/free-vector/business-background-design_1200-103.jpg'
  },
  {
    title:'Crowd Funding',
    value:'Investors can invest in a portion of crop or cultivation so that a project gets funding from a large number of investors',
    image:'https://image.freepik.com/free-vector/funding-concept_24877-50812.jpg'
  },{
    title:'Monitor Project',
    value:'Project verification process',
    image:'https://image.freepik.com/free-photo/medium-shot-agronomists-taking-picture-strawberry-with-digital-tablet_1098-19397.jpg'
  },{
    title:'Harvest Crop',
    value:'Investors can buy portions of land so that a project gets funding from a large number of investors',
    image:'https://image.freepik.com/free-photo/senior-hardworking-farmer-agronomist-soybean-field-checking-crops-before-harvest_342744-1260.jpg'
  },
  {
    title:'Distribute Crop/Distribute Profit',
    value:'Investors can buy portions of land so that a project gets funding from a large number of investors',
    image:'https://image.freepik.com/free-photo/close-up-box-with-ripe-vegetables_329181-4612.jpg'
  }
]


const Howitworks = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 text-center">
            <div className="sec-heading center">
              <h2>How It Works?</h2>
              <p>
                Farmers create project for cultivation, after project verification it is submitted for crowd funding. 
                Investors select project to raise fund. They can even select single units. 
                Farmers upload the progress of cultivation and investors get notifications about their projects.
                After harvesting, farmers can sell products to end consumers or divide the products among investors.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
         {
           data.map((item,index)=>(
            <div className="col-lg-2 col-md-2">
            <div className={index!== data.length-1?"middle-icon-features-item":"middle-icon-features-item remove"}>
              <div className="icon-features-wrap">
                <img src={item.image}  style={{resize:'cover',height:120,width:120}}/>
               
              </div>
              <div className="middle-icon-features-content">
                <h4>{item.title}</h4>
                <p>
                  {item.value}
                </p>
              </div>
            </div>
          </div>
           ))
         }
          
        
        </div>
      </div>
    </section>
  )
}

export default Howitworks

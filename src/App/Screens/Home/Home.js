import React, { useEffect } from "react";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import Howitworks from "../../Components/How-it-works/How-it-works";
import Amplify, { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import config from "../../../aws-exports";
import { createNewProject, getAllProjects } from "../../Services/Queries";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { v4 as uuidv4 } from "uuid";
import Banner from "../../Components/Banner/Banner";
import ActiveProjects from "../../Components/ActiveProjects/ActiveProjects";
import Achievements from "../../Components/Achievements/Achievements";
import { useDispatch } from "react-redux";
import { setAllProjectData } from "../../Redux/Actions/home";
Amplify.configure(config);

function Home() {
  const dispatch = useDispatch();
  async function callApi() {
    const user = await Auth.currentAuthenticatedUser();

    console.log("user---: ", user);
  }
  const imgsrc = [
    "https://image.freepik.com/free-photo/farmers-harvest-barley-happily_1150-8135.jpg",
    "https://image.freepik.com/free-photo/owner-organic-vegetable-farm-talked-with-customers-about-export-business-shake-hands-when-successfully-talking_38058-1093.jpg",
    "https://image.freepik.com/free-photo/farmer-standing-rice-field-with-tablet_1150-6059.jpg",
    "https://image.freepik.com/free-vector/nature-scene-rural-land-agriculture-grassland-abtract-silhouette-asian-farmers-working-rice-field-illustration_1150-37317.jpg",
  ];

  const onPress = () => {
    const xxx = {
      createProjectInput: {
        id: uuidv4(),
        name: "Cotton Cultivation",
        minimum_fund_required: "75000",
        location: "Punjab",
        images: [
          "https://sourcingjournal.com/wp-content/uploads/2019/06/shutterstock_1122197828.jpg",
          "https://www.agrifarming.in/wp-content/uploads/2015/03/Cotton-Plant..jpg",
        ],
        fund_received: "0",
        fund: "200000",
        end_date: "16/10/2021",
        duration: "6",
        start_date: "13/04/2021",
        status: "fund_awaiting",
        other_comments: "",
        portions: "60",
        documents: [
          "http://www.caff.org/wp-content/uploads/2010/07/Cotton-Manual.pdf",
          "https://bettercotton.org/wp-content/uploads/2014/01/Better-Cotton-Production-Principles-and-Criteria-Explained_Final-2013_eng_ext.pdf",
        ],
        detailed_description:
          "The Cotton orchard is located Punjab. It is located in a highly sought after area that is located between two rivers. The soil is very fertile and is excellent for growing most crops.The property consists of approximately 15 acres of Sugarcane orchard and 1 acre which contains an improved farmstead site, with a dwelling and detached garage, well site and farm avenues. The property is rectangular in shape, with level topography.The orchard is five years old and nearing peak maturation, it’s set to hit its average production output by 2021. In it's 2020 harvest, the orchard realized an 8.8% higher production than estimated with a 6% higher than estimated sales price.This is a very unique variety of Wheat seed that does not require bees to pollinate individual blossoms. This saves a considerable amount of money, and boosts profitability on a year-to-year basis.",
        description:
          "Farm Digital is pleased to offer ownership in a high-end production Cotton. This is an opportunity to take part ownership in a Punjab Cotton Orchard, located in a highly sought after area that is located between two rivers in the Punjab. With no expense spared in development and technology, rich soil and two water sources, this orchard is well-positioned to produce attractive returns over the next several years.The orchard is set to reach peak production in 2021, which means investors will realize their first returns within a year as the 2021 crop is sold",
        crop: "CottonPlants",
      },
    };
    // callApi();
    API.graphql({ query: createNewProject, variables: xxx }).then((ss) => {
      console.log("-----", ss);
    });
  };

  useEffect(() => {
    API.graphql({ query: getAllProjects }).then((ss) => {
      console.log("---getAllProjects", ss.data.listProjects.items);
      dispatch(setAllProjectData(ss.data.listProjects.items));
    });
    // Storage.list('public/')// for listing ALL files without prefix, pass '' instead
    // .then(result => console.log("-------",result))
    // .catch(err => console.log("ssss",err));
  }, []);
  return (
    <div id="main-wrapper">
      <Header />
      <Banner banners={imgsrc} />
      {/* <div onClick={() => onPress()}>ADD project</div> */}
      <Achievements />
      <ActiveProjects />
      <Howitworks />
      <Footer />
    </div>
  );
}

export default Home;

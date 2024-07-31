import React from 'react';
import Banner from "../components/Banner.jsx";
import FeatureItem from "../components/FeatureItem.jsx";
 import chatIcon from "../img/icon-chat.png";
 import moneyIcon from "../img/icon-money.png";
 import securityIcon from "../img/icon-security.png";
import "../../src/sass/home.scss";

/* Home page */
function Home () {
     
    return (
        <div className='homepage'>
            <main>
                {/* Returns banner*/}
                <Banner />
                <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        image={chatIcon}
        descriptionImage="Chat Icon"
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        image={moneyIcon}
        descriptionImage="Money Icon"
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        image={securityIcon}
        descriptionImage="Security Icon"
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
            </main>
        </div>
    )
}

export default Home
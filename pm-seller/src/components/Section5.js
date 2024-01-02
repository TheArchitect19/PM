import React from "react";
import styles from "./Section5.module.css";
// import heroImg from "../assets/svg/hero.png";
import abt from "../assets/svg/abt.png";
import story from "../assets/svg/story.png";
import st1 from "../assets/svg/st1.png";
import st2 from "../assets/svg/st2.png";
import st from "../assets/svg/st.png";
import man from "../assets/svg/man.png";
import sc from "../assets/svg/sc.png";
import bg from "../assets/svg/bg.png";
import rec from "../assets/svg/rec.png";
import promo from "../assets/svg/promo.png";

const Section5 = () => {
  return (
    <>
      <div className={styles.section4Container}>
        <div>
          <img className={styles.abt} src={abt} alt="abt" />
        </div>

        <div>
          <a href="/story" style={{color:"#ffffff",
            textShadow:"1.5px 1.5px 2px rgb(39, 39, 39)"}}>Story</a>
          <a href="/vision">Vision</a>
          <a href="/impact">Impact</a>
          <a href="/community">Community</a>
        </div>
        <div>
          <img className={styles.str} src={story} alt="story" />
        </div>
      </div>
      <div className={styles.s7d1}></div>
      <div className={styles.section4Container3}>
        <p>
          Pandri Market Private Limited is an online fragment of the already
          existing came into existence in 2021 and was established by founding
          members Jaya Agrawal & Rahul Kumar Agrawal to revolutionize the
          dynamics of selling and buying in local markets.
        </p>

        <p>Here&apos;s how it all started:</p>
      </div>

      <div className={styles.section4Container2}>
        <div>
          <img src={st1} alt="" />
        </div>
        <p>
          The Pandri Cloth Market - Chhattisgarh&apos;s largest textile market and
          Raipur&apos;s biggest shopping hub underwent a complete shutdown due to the
          onset of the pandemic. Shopkeepers and businessmen who relied solely
          on selling their products in this market lost their source of income
          and incurred heavy losses which have been reported to be in crores.
        </p>
      </div>
      <div className={styles.section4Container2}>
        <p style={{width:"100%"}}>
        People who frequently visited the market for their personal as well as
      business purposes could not do so and more than half of them have now
      resorted to online shopping for their clothing needs, due to the upcoming
      fashion giants like Myntra, Amazon Fashion, Ajio, Nykaa, etc.
        </p>
      </div>
      <div className={styles.section4Container2}>
        <p>
          The Pandri market is home to 2000 shops, employs more than 7000
          people, and gives an annual turnover of about 500 crores- which is all
          at stake due to the Pandemic. It was almost like a perpetual,
          never-ending dry spell for the sellers but after a long period of
          struggle and losses, the markets finally began to open up.
        </p>
        <div>
          <img src={st2} alt="" />
        </div>
      </div>
      <div className={styles.section4Container2}>
        <p style={{width:"100%"}}>
        Even though it has been quite some time since the normalization of the
      situation began, the earnings of these shopkeepers are nowhere close to
      what they used to earn earlier.
        </p>
      </div>
      <div className={styles.section4Container2}>
        <div>
          <img src={st} alt="" />
        </div>
        <p>
          Moreover, the uncertainty and fear of another lockdown and consecutive
          covid waves make it even more difficult for these shops to gain
          momentum in their business because very few people continue to visit
          the market. This situation has left a majority of local wholesalers
          and vendors crippled and forced many to close down their shops and
          move back to their villages because they could not bear the enormous
          cost of infrastructure, electricity, and maintenance from the limited
          income they were earning post-lockdown.
        </p>
      </div>
    </>
  );
};

export default Section5;

<div>
  <div className={styles.section5Container2}></div>
  <div className={styles.section5Container3}>
    <p></p>
    <h2>Here is how it all started:</h2>
  </div>
  <img className={styles.bg} src={bg} alt="" />

  <div className={styles.section5Container4}>
    <div className={styles.section5SContainer4}>
      <img className={styles.st1} src={st1} alt="" />

      <p></p>
    </div>
  </div>
  <div className={styles.section5Container5}>
    <img className={styles.rec} src={rec} alt="" />

    <p> </p>
  </div>
  <div className={styles.section5Container7}>
    <img className={styles.bg1} src={bg} alt="" />
    <img className={styles.st3} src={st2} alt="" />

    <p></p>
  </div>
  <div className={styles.section5Container6}>
    <img className={styles.rec} src={rec} alt="" />

    <p>
      {" "}

    </p>
  </div>

  <div className={styles.section5Container4}>
    <img className={styles.bg} src={bg} alt="" />
    <div className={styles.section5SContainer4}>
      <img className={styles.st2} src={st} alt="" />

      <p></p>
    </div>
  </div>
  <div className={styles.info}>
    <p className={styles.mem}>MEMBERSHIP</p>
    <h3 className={styles.gyb}>GROW YOUR BUSSINESS</h3>
    <h3 className={styles.ws}>WITH US</h3>
    <p className={styles.coo}>CHECK OUT OUR</p>
    <p className={styles.np}>new plans</p>
  </div>

  <div className={styles.promotion}>
    <img className={styles.promo} src={promo} alt="" />
    <button className={styles.pb}>PICK A PLAN</button>
    <img className={styles.st4} src={sc} alt="" />
    <img className={styles.st5} src={man} alt="" />

    <p>
      Thus, Pandri Market (Online) is a hyperlocal e-commerce venture with the
      aim to provide an online platform to the local shopkeepers of Raipur to
      help them maintain business continuity and make sure they have a constant
      source of income through the sale of their products despite the lockdown
      or change in the behavioral patterns of customers.
    </p>
    <p>
      {" "}
      Moreover, it does only aim to help the sellers and businessmen but also
      makes it easier for the customers to have access to a large number of
      shops at the click of their hands and thus provides them with a better
      shopping experience.
    </p>
  </div>
</div>;

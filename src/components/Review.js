import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Review.module.css";
import UserImage from "../assets/home/black woman.svg";
import Stars from "../assets/home/Rating stars.svg";

function Review() {
  // Dynamic import to prevent failure during server-side rendering
  const Slider = dynamic(import("react-slick"), { ssr: false });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 16,
    slidesToScroll: 16,
  };

  return (
    <>
      <section className={styles.cont}>
        <div className={styles.heading}>
          <h2>Health Care Services in The Eyes of Patients</h2>
          <p>
            Reviews from patients who have visited and experience health
            services at various health care centre
          </p>
        </div>

        <Slider {...settings} className={styles.carousel_cont}>
          <div >
            <div className={styles.carousel_boxes}>
              <div className={styles.user_details}>
                <div className={styles.user_image}>
                  <Image src={UserImage} alt="user image" />
                </div>
                <div className={styles.user_name}>
                  <h2>Adamu John</h2>
                  <p>Patirnt</p>
                </div>
              </div>

              <div className={styles.rate_cont}>
                <div className={styles.rating}>
                  <p>4.6</p>
                  <Image src={Stars} alt="stars" />
                  <p>(230)</p>
                </div>
                <p>@hospitalho spsailh nuveasi uhnbcEUBICY </p>
              </div>

              <p>
                awlneiuncwei wfcniuel weinuclw wcneiocwe qwfeino wceinocwe
                wecino cwineocew ceinowce cqwein
              </p>
            </div>

            <div className={styles.carousel_boxes}>
              <div className={styles.user_details}>
                <div className={styles.user_image}>
                  <Image src={UserImage} alt="user image" />
                </div>
                <div className={styles.user_name}>
                  <h2>Adamu John</h2>
                  <p>Patirnt</p>
                </div>
              </div>

              <div className={styles.rate_cont}>
                <div className={styles.rating}>
                  <p>4.6</p>
                  <Image src={Stars} alt="stars" />
                  <p>(230)</p>
                </div>
                <p>@hospitalho spsailh nuveasi uhnbcEUBICY </p>
              </div>

              <p>
                awlneiuncwei wfcniuel weinuclw wcneiocwe qwfeino wceinocwe
                wecino cwineocew ceinowce cqwein
              </p>
            </div>

            <div className={styles.carousel_boxes}>
              <div className={styles.user_details}>
                <div className={styles.user_image}>
                  <Image src={UserImage} alt="user image" />
                </div>
                <div className={styles.user_name}>
                  <h2>Adamu John</h2>
                  <p>Patirnt</p>
                </div>
              </div>

              <div className={styles.rate_cont}>
                <div className={styles.rating}>
                  <p>4.6</p>
                  <Image src={Stars} alt="stars" />
                  <p>(230)</p>
                </div>
                <p>@hospitalho spsailh nuveasi uhnbcEUBICY </p>
              </div>

              <p>
                awlneiuncwei wfcniuel weinuclw wcneiocwe qwfeino wceinocwe
                wecino cwineocew ceinowce cqwein
              </p>
            </div>

            <div className={styles.carousel_boxes}>
              <div className={styles.user_details}>
                <div className={styles.user_image}>
                  <Image src={UserImage} alt="user image" />
                </div>
                <div className={styles.user_name}>
                  <h2>Adamu John</h2>
                  <p>Patirnt</p>
                </div>
              </div>

              <div className={styles.rate_cont}>
                <div className={styles.rating}>
                  <p>4.6</p>
                  <Image src={Stars} alt="stars" />
                  <p>(230)</p>
                </div>
                <p>@hospitalho spsailh nuveasi uhnbcEUBICY </p>
              </div>

              <p>
                awlneiuncwei wfcniuel weinuclw wcneiocwe qwfeino wceinocwe
                wecino cwineocew ceinowce cqwein
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Review;

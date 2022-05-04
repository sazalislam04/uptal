import { Row, Col, Carousel} from "react-bootstrap";

export default function Homeslide() {

    return (
        <div className="homeslide">
            <Carousel>
                <Carousel.Item  className="text-center" interval={1000}>
                    <img
                    src="/paypal-color-v1.svg"
                    alt="Picture of the author"
                    className="brand_img"
                    />
                </Carousel.Item>
                <Carousel.Item  className="text-center" interval={500}>
                        <img
                        src="/walmart-color-v1.svg"
                        alt="Picture of the author"
                        className="brand_img"
                        />
                </Carousel.Item>
                <Carousel.Item  className="text-center" interval={500}>
                    <img
                    src="/amazon-color-v1.svg"
                    alt="Picture of the author"
                    className="brand_img"
                />
                </Carousel.Item>

                <Carousel.Item  className="text-center" interval={500}>
                        <img
                        src="/intuit-color-v1.png"
                        alt="Picture of the author"
                        className="brand_img"
                    />
                </Carousel.Item>
                <Carousel.Item  className="text-center" interval={500}>
                    <img
                        src="/mircrosoft.jpg"
                        alt="Picture of the author"
                        className="brand_img"
                    />
                </Carousel.Item>
                <Carousel.Item  className="text-center" >
                    <img
                    src="/barclays-color-v1.svg"
                    alt="Picture of the author"
                    className="brand_img"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }

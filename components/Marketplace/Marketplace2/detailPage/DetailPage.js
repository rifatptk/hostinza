import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faBitbucket,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import Image from "next/image";

export default function DetailPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-6xl mx-auto px-4 my-10 pb-5 detailPage">
      <div className="header flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-2xl my-3">
            Product Details
          </h1>
        </div>
      </div>
      <hr className="my-3" />
      <div className="grid grid-cols-2 gap-3 mt-10">
        <Slider {...settings}>
          <Image
            objectFit="cover"
            width={6}
            height={4}
            alt="productImage"
            layout="responsive"
            src="/images/hotel-3.jfif"
            className="rounded-md h-[350px]"
          />
          <Image
            objectFit="cover"
            width={6}
            height={4}
            alt="productImage"
            layout="responsive"
            src="/images/hotel-7.jpg"
            className="rounded-md h-[350px]"
          />
          <Image
            objectFit="cover"
            width={6}
            height={4}
            alt="productImage"
            layout="responsive"
            src="/images/hotel-5.webp"
            className="rounded-md h-[350px]"
          />
          <Image
            objectFit="cover"
            width={6}
            height={4}
            alt="productImage"
            layout="responsive"
            src="/images/hotel-3.jfif"
            className="rounded-md h-[350px]"
          />
        </Slider>
        <div className="ml-5">
          <h1 className="text-2xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-xl mb-3">
            Information
          </h1>
          <p className="text-sm text-gray-600 my-3">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like and sheets containing Lorem Ipsum passages
          </p>
          <p className="text-sm text-gray-600 my-3">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like.
          </p>
          <div className="flex items-center justify-between">
            <ul>
              <li className="my-1">
                <FontAwesomeIcon
                  className="text-green-600 pt-1 text-xl mr-3"
                  icon={faCheckCircle}
                />
                <span className="pb-2">Development </span>
              </li>
              <li className="my-1">
                <FontAwesomeIcon
                  className="text-green-600 pt-1 text-xl mr-3"
                  icon={faCheckCircle}
                />
                <span className="pb-2">Build and Deployment </span>
              </li>
              <li className="my-1">
                <FontAwesomeIcon
                  className="text-green-600 pt-1 text-xl mr-3"
                  icon={faCheckCircle}
                />
                <span className="pb-2">Git Repository </span>
              </li>
              <li className="my-1">
                <FontAwesomeIcon
                  className="text-green-600 pt-1 text-xl mr-3"
                  icon={faCheckCircle}
                />
                <span className="pb-2">Development </span>
              </li>
            </ul>
            <div className="mb-5">
              <FontAwesomeIcon
                className="text-dark-blue-2 pt-1 text-3xl mr-3"
                icon={faBitbucket}
              />
              <FontAwesomeIcon
                className="text-dark-blue-2 pt-1 text-3xl mr-3"
                icon={faGithub}
              />
              <FontAwesomeIcon
                className="text-dark-blue-2 pt-1 text-3xl mr-3"
                icon={faGitlab}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
}

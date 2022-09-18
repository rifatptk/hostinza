import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Filters from "./components/Filters";
import Link from "next/link";
import MarketCard from "./components/MarketCard";
export default function MarketPlace() {
    function showAlert(id){
        alert("This Package with id "+ id + " added to favorites")
      }
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="header flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-dark-blue-2 xs:ml-3 xs:text-2xl my-3">
            Market Place
          </h1>
        </div>
        <div className="flex w-1/3">
          <input
            placeholder="Search Here..."
            className="ml-auto w-full p-2 rounded-md border-2 border-dark-blue-2 rounded-r-none focus:rounded-r-none focus-visible:rounded-r-none"
          />
          <div className="bg-dark-blue-2 py-2 px-3 rounded-md rounded-l-none">
            <FontAwesomeIcon className="text-white pt-1" icon={faSearch} />
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <Filters />
      <div className="grid grid-cols-4 gap-3 mt-10">
        <Link href="/dashboard/marketPlace/product">
          <MarketCard
            img={"/images/apps/pixelfed.png"}
            label="Premium"
            heading="Pixel Fed"
            showAlert={showAlert}
            para="Great tool to start development"
            detailed="This is a quick start to web development and build in plugins which can be quickly used"
            extra="Important Notes"
            id={1}
            price="$172"
            tag="Tag"
          />
        </Link>
        <MarketCard
          img={"/images/apps/pihole.png"}
          label="Basic"
          showAlert={showAlert}
          heading="Bit Bucket"
          detailed="This is a quick start to web development and build in plugins which can be quickly used"
          para="Glamping de luxe. Aduluts Only..."
          extra="Important Notes"
          id={2}
          price="$172"
          tag="Tag"
        />
        <MarketCard
          img={"/images/apps/overseerr-icon.png"}
          label="Basic"
          heading="Over Seerr"
          detailed="This is a quick start to web development and build in plugins which can be quickly used"
          para="Glamping de luxe. Aduluts Only..."
          extra="Important Notes"
          id={3}
           showAlert={showAlert}
          price="$172"
          tag="Tag"
        />
        
        <MarketCard
          img={"/images/apps/plextraktsync-logo.png"}
          label="Standard"
          heading="Plextrakt Sync"
          detailed="This is a quick start to web development and build in plugins which can be quickly used"
          para="Glamping de luxe. Aduluts Only..."
          extra="Important Notes"
          id={4}
           showAlert={showAlert}
          price="$172"
          tag="Tag"
        />
         <MarketCard
          img={"/images/apps/plexemail-icon.png"}
          label="Standard"
          heading="Speed Test"
          detailed="This is a quick start to web development and build in plugins which can be quickly used"
          para="Glamping de luxe. Aduluts Only..."
          extra="Important Notes"
          id={5}
           showAlert={showAlert}
          price="$172"
          tag="Tag"
        />
         <MarketCard
          img={"/images/apps/radarr_alpha.png"}
          label="Standard"
          heading="Radarr Alpha"
          detailed="This is a quick start to web development and build in plugins which can be quickly used"
          para="Glamping de luxe. Aduluts Only..."
          extra="Important Notes"
          id={6}
          price="$172"
          tag="Tag"
        />
      </div>
    </div>
  );
}

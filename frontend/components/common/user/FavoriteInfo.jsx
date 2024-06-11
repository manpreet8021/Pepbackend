import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Table from 'react-bootstrap/Table';

const LocationInfo = ({data}) => {
  return (
    <div className="col-xl-10">
      <div className="border-top-light pt-30"></div>
      <Table responsive>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <Link href={`retreat/${item._id}`}>
                <td className="rounded-4" style={{width: '30%'}}>
                  <Image
                    width={100}
                    height={100}
                    style={{'objectFit': 'cover', margin: '10%', height: '80%'}}
                    className="rounded-4 col-12 js-lazy"
                    src={item.thumbnail.location}
                    alt="image"
                  />
                </td>
                <td style={{width: '50%'}}>
                  <h3 className="text-18 lh-16 fw-500">{item.title}</h3>
                </td>
                <td className="md:d-none" style={{width: '20%'}}>
                  Duration {item.retreatDuration} nights
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LocationInfo;

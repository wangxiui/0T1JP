import Layout from '@/components/business/Layout';
// import Button from '@mui/material/Button';
import Image from "next/image";
import Word from 'components/business/Word'
import Slider from "react-slick";

const images = [1,2,3,4,5,6,7];

export default function Home() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div className="overflow-auto w-full h-full">
        <Image width={1440} height={900} src="/images/background-tutorial.svg" className="w-full h-auto max-h-full object-cover object-center object-top fixed -z-10" alt="bg image" />
        {/*<Button variant="contained">Contained</Button>*/}
        <div className='pt-10'>
          <Slider {...settings}>
            {
              images.map(v => (
                <div>
                  <Word text={v} className="animate__animated animate__flash animate__infinite animate__slow" key={v} />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </Layout>
  )
}

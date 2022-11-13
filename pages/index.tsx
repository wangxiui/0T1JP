import Layout from '@/components/business/Layout';
// import Button from '@mui/material/Button';
import Image from "next/image";
import Word from 'components/business/Word'
import Slider from "react-slick";
import {GetStaticProps} from "next";
import {getWordsData} from "../lib/words";
import styles from 'styles/index.module.scss'
import cn from "classnames";

interface Props {
  wordsData: {id: string, data: {jp: string, cn: string}[]}
}

export default function Home(props: Props) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const {wordsData} = props
  return (
    <Layout>
      <div className="overflow-auto w-full h-full my">
        <Image width={1440} height={900} src="/images/background-tutorial.svg" className="w-full h-auto max-h-full object-cover object-center object-top fixed -z-10" alt="bg image" />
        {/*<Button variant="contained">Contained</Button>*/}
        <div className='pt-10 h-full'>
          <Slider {...settings} className={cn('h-full', styles['my-slider'])}>
            {
              wordsData.data.map(v => (
                <div key={v.cn}>
                  <Word item={v} className="animate__animated animate__flash animate__infinite animate__slow" />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </Layout>
  )
}

/**
 * 获取所有的单词
 */
export const getStaticProps: GetStaticProps = async () => {
  // Fetch necessary data for the blog post using params.id
  const wordsData = await getWordsData('Words');
  return {
    props: {
      wordsData: {
        id: wordsData.id,
        data: JSON.parse(wordsData.data)
      },
    },
  };
}

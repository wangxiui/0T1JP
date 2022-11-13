import '../styles/global.css';
// 动效样式
import 'animate.css';
// 轮播样式
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/**
* @name: Word
* @description：一个单词卡片
* @author: wkk
* @date: 2022-11-13
*/
import cn from "classnames";
import {useState} from 'react'
import { motion } from "framer-motion"

interface Props {
  item: {jp: string, cn: string} // item数据
  className?: string // 自定义样式
}

/**
 * 一个单词卡片
 * @param props
 * @constructor
 */
export default function Word(props: Props) {
  const {item, className} = props
  const rootClassName = cn(
    'w-96 h-96 m-auto bg-transparent border-solid border-2 border-indigo-600 flex justify-center items-center ' +
    'rounded-lg shadow-lg shadow-blue-500/50 text-7xl',
    className
  );
  const [isPositive, setIsPositive] = useState(true);
  return (
    // 点击：展示正反面

    isPositive
      ? <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={rootClassName} onClick={() => setIsPositive(false)}>{item.cn}</motion.div>
      : <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={rootClassName} onClick={() => setIsPositive(true)}>{item.jp}</motion.div>
  )
}

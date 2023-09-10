import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss"
import { useEffect, useState } from 'react';

interface Props {
  select: ITasks | undefined
}

export default function Stopwatch({ select }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (select?.time) {
      setTime(timeToSeconds(select.time))
    }
  }, [select])
  return (
    <div className={styles.Stopwatch}>
      <p className={styles.title}>Ecolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar</Button>
    </div >
  )
}
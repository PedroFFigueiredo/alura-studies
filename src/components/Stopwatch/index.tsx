import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss"
import { useEffect, useState } from 'react';

interface Props {
  select: ITasks | undefined
  finishTask: () => void
}

export default function Stopwatch({ select, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (select?.time) {
      setTime(timeToSeconds(select.time))
    }
  }, [select]);

  function regressiva(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressiva(count - 1);
      }
      finishTask();
    }, 1000)
  }

  return (
    <div className={styles.Stopwatch}>
      <p className={styles.title}>Ecolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Começar</Button>
    </div >
  )
}
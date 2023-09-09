import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss"

export default function Stopwatch() {
  return (
    <div className={styles.Stopwatch}>
      <p className={styles.title}>Ecolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div >
  )
}
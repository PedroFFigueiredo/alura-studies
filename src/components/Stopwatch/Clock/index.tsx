import styles from './Clock.module.scss'

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const secunds = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secundTen, secundUnit] = String(secunds).padStart(2, '0');
  return (
    <>
      <span className={styles.clockNumber}>{minuteTen}</span>
      <span className={styles.clockNumber}>{minuteUnit}</span>
      <span className={styles.clockDivision}>:</span>
      <span className={styles.clockNumber}>{secundTen}</span>
      <span className={styles.clockNumber}>{secundUnit}</span>
    </>
  )
}
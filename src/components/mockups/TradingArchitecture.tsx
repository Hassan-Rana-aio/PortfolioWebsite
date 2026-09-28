import styles from './TradingArchitecture.module.scss';

const engine = [
  'Market & limit orders',
  'Simulated slippage',
  'P&L calculation',
  'Portfolio management',
];
const dashboard = [
  'Live charts',
  'Order depth',
  'Trade history',
  'P&L snapshots',
];

/** Architecture of the K-Hive paper-trading platform, drawn from the CV description. */
export default function TradingArchitecture() {
  return (
    <figure
      className={styles.frame}
      role="img"
      aria-label="Architecture: Binance WebSocket and REST market data feed a Node.js and Express trade engine, which stores users and trades in MongoDB and serves a React and TypeScript dashboard."
    >
      <div className={styles.grid} aria-hidden="true">
        <div className={`${styles.node} ${styles.source}`}>
          <small>Market data</small>
          <strong>Binance</strong>
          <span>WebSocket · REST</span>
        </div>

        <div className={`${styles.link} ${styles.l1}`}>
          <i />
        </div>

        <div className={`${styles.node} ${styles.engine}`}>
          <small>Trade engine</small>
          <strong>Node.js · Express</strong>
          <ul>
            {engine.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <div className={`${styles.link} ${styles.l2}`}>
          <i />
        </div>

        <div className={`${styles.node} ${styles.client}`}>
          <small>Dashboard</small>
          <strong>React · TypeScript</strong>
          <ul>
            {dashboard.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className={`${styles.link} ${styles.l3}`}>
          <i />
        </div>

        <div className={`${styles.node} ${styles.db}`}>
          <small>Persistence</small>
          <strong>MongoDB</strong>
          <span>Users · orders · trades · history</span>
        </div>
      </div>
    </figure>
  );
}

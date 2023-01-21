import styles from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;

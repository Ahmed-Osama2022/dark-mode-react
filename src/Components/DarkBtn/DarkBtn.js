import styles from './DarkBtn.module.css';

const DarkBtn = ({ onClickFunc }) => {
  return (
    <>
      <button type="button" className={styles.button} onClick={onClickFunc}>
        Dark Mode
      </button>
    </>
  );
};

export default DarkBtn;

import React from "react";
import styles from "./index.module.css";

interface Props {}

const PageLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={styles.pageLayout}>{children}</div>;
};

export default React.memo(PageLayout);

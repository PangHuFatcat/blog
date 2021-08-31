import React from "react";
import styles from "./index.module.css";

interface Props {}

const WidgetLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={styles.widgetLayout}>{children}</div>;
};

export default React.memo(WidgetLayout);

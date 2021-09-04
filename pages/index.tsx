import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import WidgetLayout from "../components/WidgetLayout";
import styles from "./index.module.css";

const Index: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.index}>
        {[...new Array(1)].map((_, index) => (
          <div key={index}>
            <WidgetLayout key={index}></WidgetLayout>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Index;

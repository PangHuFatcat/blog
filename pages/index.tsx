import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import WidgetLayout from "../components/WidgetLayout";
import styles from "./index.module.css";

const Index: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.index}>
        {[...new Array(2)].map((_, index) => (
          <div key={index}>
            <WidgetLayout key={index}>小部件1</WidgetLayout>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Index;

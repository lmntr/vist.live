"use client";

import styles from "./page.module.css";
import readme from "@/README.md";
import Markdown from "react-markdown";

const readmeClean = readme.replace(/(\!\[.*?\]\()public\/(.*?\))/g, '$1$2');

export default function Home() {
  return (
    <div className={styles.page}>
      <Markdown>{readmeClean}</Markdown>
    </div>
  );
}

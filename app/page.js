"use client";

import React from 'react';
import Markdown from "react-markdown";

import styles from "./page.module.css";
import readme from "@/README.md";

export const metadata = {
  title: 'Virtual Stage',
};

const readmeClean = readme.replace(/(\!\[.*?\]\()public\/(.*?\))/g, '$1$2');

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
const HeadingRenderer = props => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/[^\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g, '-');
  return React.createElement('h1', { id: slug }, props.children);
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Markdown components={{ h1: HeadingRenderer }}>{readmeClean}</Markdown>
      </main>
    </div>
  );
}

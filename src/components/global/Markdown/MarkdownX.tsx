import React from 'react'
import rehypeRaw from "rehype-raw";
import Markdown from 'react-markdown';
import clsx from 'clsx';
import './Markdown.style.scss'
type TMarkdownXProps = {
  content?: string;
  className?: string;
}

const MarkdownX = ({content, className}: TMarkdownXProps) => {
  return (
    <Markdown className={clsx(className, "mark-down-container")} rehypePlugins={[rehypeRaw]}>{content}</Markdown>
  )
}

export default MarkdownX
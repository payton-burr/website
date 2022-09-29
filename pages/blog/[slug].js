import { readdirSync, readFileSync } from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../ui/Button";
import React from "react";

const components = { Button, SyntaxHighlighter };

export const getStaticPaths = async function () {
  const files = readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async function ({ params: { slug } }) {
  const source = readFileSync(path.join("posts", `${slug}.mdx`), "utf-8");
  console.log(slug);
  const { code, frontmatter } = await bundleMDX({ source });

  return {
    props: {
      frontmatter,
      code,
    },
  };
};

export const PostPage = function ({
  code,
  frontmatter: { title, date, description, thumbnailUrl, tags },
}) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mt-4">
      <header>
        <h1>{title}</h1>
      </header>
      <Component components={components} />
    </div>
  );
};

export default PostPage;

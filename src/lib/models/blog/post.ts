const shortContentLength = 300;

export type Post = {
  path: string;
  title: string;
  date: Date;
  content?: string;
  shortContent?: string;
};

// Import all markdown files as raw text at build time
const markdownFiles = import.meta.glob("/src/lib/models/blog/posts/*.md", {
  as: "raw",
  eager: true,
});

export const posts: Post[] = Object.entries(markdownFiles)
  .map(([path, content]) => ({
    path,
    title: extractTitle(content as string),
    date: extractDateFromFilename(path),
    content: content as string,
    shortContent: getShortContent(content as string),
  }))
  .sort((a, b) => b.date.getTime() - a.date.getTime());

function extractTitle(content: string): string {
  const match = content.match(/^#\s*(.*)/);
  return match ? match[1] : "Untitled";
}

function extractDateFromFilename(filePath: string): Date {
  const match = filePath.match(/(\d{4}-\d{2}-\d{2})/);
  if (!match) throw new Error(`Invalid filename: ${filePath}`);
  return new Date(match[1]);
}

function getShortContent(content: string): string {
  let shortContent = content.slice(0, shortContentLength);
  for (let i = shortContentLength; i < content.length; i++) {
    if ([",", ".", "!", "?"].includes(content[i])) {
      shortContent = content.slice(0, i);
      break;
    }
  }

  if (shortContent.length < content.length) {
    shortContent += "...";
  }

  return shortContent;
}

export const removeHTMLTags = (html: string) =>
  html.replace(/(<([^>]+)>)/gi, '');

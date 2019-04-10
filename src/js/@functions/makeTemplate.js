export const makeTemplate = (post) => {
  return `
    <article>
      <h2>${post.title}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <a href="/">Read more</a>
    </article>
  `
}
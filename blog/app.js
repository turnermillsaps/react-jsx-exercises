let Header = () => {
    return <span>Design a header for your blog</span>
}
let Article = () => {
    return <span>Write and design your blog article</span>
}
let Footer = () => {
    return <span>Design a footer for your blog</span>
}
  
let Blog = () => {
    return <span>
      <Header />
      <Article />
      <Footer />
    </span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))
import { Link } from 'react-router-dom'
import { categories, getPopularPosts, getAllTags } from '../data/posts'

function Sidebar() {
  const popularPosts = getPopularPosts(4)
  const tags = getAllTags()

  return (
    <aside className="space-y-8">
      {/* Author Card */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <span className="text-2xl font-bold text-foreground">2B</span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">2B</h3>
            <p className="text-sm text-muted-foreground">博客作者</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          热爱技术与设计的开发者，专注于 Web 前端开发，偶尔写写生活感悟。
        </p>
        <div className="flex gap-3 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">分类</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/category/${category.slug}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <span>{category.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">热门文章</h3>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={post.id}>
              <Link
                to={`/article/${post.id}`}
                className="group flex gap-3"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-foreground mb-4">标签</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

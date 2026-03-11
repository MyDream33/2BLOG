import { Link } from 'react-router-dom'

function ArticleCard({ post, featured = false }) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-card border border-border">
        <Link to={`/article/${post.id}`} className="block">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-foreground">
                {post.category.name}
              </span>
              <span className="text-sm text-background/80">{post.readTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-background mb-2 line-clamp-2 font-serif">
              {post.title}
            </h2>
            <p className="text-background/80 text-sm line-clamp-2 hidden sm:block">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden transition-shadow hover:shadow-lg">
      <Link to={`/article/${post.id}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              {post.category.name}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-foreground/80 transition-colors font-serif">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {post.views}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard

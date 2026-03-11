import { useParams, Link } from 'react-router-dom'
import { getPostById, getRecentPosts } from '../data/posts'
import Sidebar from '../components/Sidebar'

function ArticlePage() {
  const { id } = useParams()
  const post = getPostById(id)
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== parseInt(id))

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">文章未找到</h1>
        <p className="text-muted-foreground mb-8">抱歉，您访问的文章不存在或已被删除。</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium"
        >
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">首页</Link>
        <span>/</span>
        <Link to={`/category/${post.category.slug}`} className="hover:text-foreground transition-colors">
          {post.category.name}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1 min-w-0">
          {/* Cover Image */}
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                to={`/category/${post.category.slug}`}
                className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                {post.category.name}
              </Link>
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                {post.views}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {post.excerpt}
            </p>
          </header>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-8">
            <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <span className="text-lg font-bold text-foreground">2B</span>
            </div>
            <div>
              <p className="font-medium text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">发布于 {post.date}</p>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-border">
            <span className="text-sm text-muted-foreground mr-2">标签：</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share & Actions */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">分享：</span>
              <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="text-sm">收藏</span>
            </button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">相关推荐</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.slice(0, 2).map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/article/${relatedPost.id}`}
                    className="group flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Comments Section */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">评论</h2>
            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <p className="text-muted-foreground">暂无评论，来说两句吧</p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                发表评论
              </button>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage

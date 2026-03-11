import { posts, categories } from '../data/posts'
import ArticleCard from '../components/ArticleCard'
import Sidebar from '../components/Sidebar'

function HomePage() {
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif text-balance">
            探索技术与生活的交汇点
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            记录学习、分享经验、追求成长。这里有技术教程、设计思考、读书笔记与生活随想。
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background">
            全部
          </button>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.slug}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-12 animate-fade-in">
        <ArticleCard post={featuredPost} featured />
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Articles Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">最新文章</h2>
            <a
              href="/category/all"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              查看全部
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard post={post} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-10 text-center">
            <button className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors">
              加载更多
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage

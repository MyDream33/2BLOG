import { useParams, Link } from 'react-router-dom'
import { categories, getPostsByCategory } from '../data/posts'
import ArticleCard from '../components/ArticleCard'
import Sidebar from '../components/Sidebar'

function CategoryPage() {
  const { slug } = useParams()
  const currentCategory = categories.find(cat => cat.slug === slug)
  const posts = getPostsByCategory(slug)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">首页</Link>
          <span>/</span>
          <span className="text-foreground">{currentCategory?.name || '全部文章'}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-serif">
          {currentCategory?.name || '全部文章'}
        </h1>
        <p className="text-muted-foreground">
          {currentCategory?.description || `共 ${posts.length} 篇文章`}
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          <Link
            to="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !slug
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            全部
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                slug === category.slug
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Articles */}
        <div className="flex-1">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">该分类下暂无文章</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                返回首页
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <div
                    key={post.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ArticleCard post={post} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-10">
                <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <span className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium">1</span>
                <span className="px-4 py-2 rounded-lg text-muted-foreground text-sm font-medium hover:bg-muted cursor-pointer transition-colors">2</span>
                <span className="px-4 py-2 rounded-lg text-muted-foreground text-sm font-medium hover:bg-muted cursor-pointer transition-colors">3</span>
                <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage

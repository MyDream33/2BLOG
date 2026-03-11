export const categories = [
  { id: 1, name: '技术', slug: 'tech', description: '技术分享与教程' },
  { id: 2, name: '生活', slug: 'life', description: '生活随笔与感悟' },
  { id: 3, name: '设计', slug: 'design', description: '设计灵感与作品' },
  { id: 4, name: '阅读', slug: 'reading', description: '书评与笔记' },
]

export const posts = [
  {
    id: 1,
    title: '构建现代化的 React 应用架构',
    slug: 'modern-react-architecture',
    excerpt: '探索 React 18 的新特性，包括并发渲染、Suspense 和自动批处理等，以及如何利用这些特性构建高性能的现代化应用。',
    content: `
      <h2>引言</h2>
      <p>React 18 带来了许多令人兴奋的新特性，这些特性将从根本上改变我们构建 React 应用的方式。本文将深入探讨这些新特性，以及如何在实际项目中有效地应用它们。</p>
      
      <h2>并发渲染</h2>
      <p>并发渲染是 React 18 最重要的新特性之一。它允许 React 在渲染过程中暂停和恢复工作，从而提供更流畅的用户体验。这意味着即使在进行复杂的更新时，用户界面也能保持响应。</p>
      
      <h3>useTransition</h3>
      <p>useTransition 钩子让我们可以将某些更新标记为"过渡"更新，这些更新可以被更紧急的更新中断。这对于处理大量数据或复杂计算特别有用。</p>
      
      <blockquote>并发模式不是一个功能，而是一种新的幕后机制，它使 React 能够同时准备多个版本的 UI。</blockquote>
      
      <h2>Suspense 的改进</h2>
      <p>Suspense 现在可以在服务器端工作，这意味着我们可以更优雅地处理数据加载状态。结合 React.lazy，我们可以轻松实现代码分割和懒加载。</p>
      
      <h2>自动批处理</h2>
      <p>React 18 自动批处理所有状态更新，无论它们来自何处。这减少了不必要的重新渲染，提高了应用性能。</p>
      
      <h2>总结</h2>
      <p>React 18 的这些改进使得构建高性能、响应式的应用变得更加容易。通过理解和正确使用这些新特性，我们可以显著提升用户体验。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    category: { id: 1, name: '技术', slug: 'tech' },
    tags: ['React', 'JavaScript', '前端'],
    author: '2B',
    date: '2024-03-15',
    readTime: '8 分钟',
    views: 1234,
  },
  {
    id: 2,
    title: 'Tailwind CSS 实战技巧与最佳实践',
    slug: 'tailwind-css-best-practices',
    excerpt: '深入了解 Tailwind CSS 的高级用法，包括自定义配置、组件提取、响应式设计模式等实用技巧。',
    content: `
      <h2>为什么选择 Tailwind CSS</h2>
      <p>Tailwind CSS 是一个功能优先的 CSS 框架，它提供了低级的实用工具类，让你可以直接在 HTML 中构建完全自定义的设计。</p>
      
      <h2>配置与定制</h2>
      <p>Tailwind 的真正强大之处在于其高度可定制性。通过 tailwind.config.js，你可以完全控制颜色、间距、字体等设计系统的各个方面。</p>
      
      <h2>组件抽象</h2>
      <p>虽然 Tailwind 鼓励使用实用工具类，但对于重复使用的模式，创建组件抽象是明智的选择。这可以通过 React 组件或 @apply 指令来实现。</p>
      
      <h2>响应式设计</h2>
      <p>Tailwind 的响应式设计采用移动优先的方法，使用 sm:、md:、lg: 等前缀来应用不同断点的样式。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop',
    category: { id: 1, name: '技术', slug: 'tech' },
    tags: ['CSS', 'Tailwind', '前端'],
    author: '2B',
    date: '2024-03-10',
    readTime: '6 分钟',
    views: 892,
  },
  {
    id: 3,
    title: '极简主义生活方式的思考',
    slug: 'minimalist-lifestyle',
    excerpt: '在这个信息爆炸的时代，如何通过极简主义找到内心的平静，专注于真正重要的事情。',
    content: `
      <h2>什么是极简主义</h2>
      <p>极简主义不仅仅是拥有更少的物品，它是一种有意识地选择什么值得我们投入时间和精力的生活方式。</p>
      
      <h2>数字极简</h2>
      <p>在数字时代，极简主义也延伸到了我们的数字生活。减少不必要的应用、取消订阅、专注于高质量的内容消费。</p>
      
      <h2>实践建议</h2>
      <p>开始极简生活不需要一蹴而就。可以从清理一个抽屉开始，逐渐扩展到整个生活空间，最终影响到思维方式。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=450&fit=crop',
    category: { id: 2, name: '生活', slug: 'life' },
    tags: ['生活方式', '极简', '思考'],
    author: '2B',
    date: '2024-03-08',
    readTime: '5 分钟',
    views: 567,
  },
  {
    id: 4,
    title: '设计系统构建指南',
    slug: 'design-system-guide',
    excerpt: '从零开始构建可扩展的设计系统，包括色彩、排版、组件库等核心要素的规划与实现。',
    content: `
      <h2>什么是设计系统</h2>
      <p>设计系统是一套可复用的组件集合，遵循明确的标准，可以组合在一起构建任意数量的应用程序。</p>
      
      <h2>核心要素</h2>
      <p>一个完整的设计系统包括：设计原则、色彩系统、排版规范、间距系统、组件库、图标库等。</p>
      
      <h2>实施策略</h2>
      <p>构建设计系统需要设计师和开发者的紧密协作。从小处着手，逐步迭代，持续收集反馈并改进。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    category: { id: 3, name: '设计', slug: 'design' },
    tags: ['设计系统', 'UI', 'UX'],
    author: '2B',
    date: '2024-03-05',
    readTime: '10 分钟',
    views: 789,
  },
  {
    id: 5,
    title: '《原则》读书笔记',
    slug: 'principles-book-notes',
    excerpt: '瑞·达利欧在《原则》中分享了他的生活和工作原则，这些原则帮助他建立了世界上最大的对冲基金。',
    content: `
      <h2>关于这本书</h2>
      <p>瑞·达利欧是桥水基金的创始人，他在《原则》中分享了自己几十年来总结的生活和工作原则。</p>
      
      <h2>核心思想</h2>
      <p>生活中最重要的是追求有意义的工作和有意义的人际关系。要实现这些，需要极度透明和极度求真。</p>
      
      <h2>关于失败</h2>
      <p>痛苦+反思=进步。失败是成功的必要条件，关键是如何从失败中学习并建立系统来避免重复犯错。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=450&fit=crop',
    category: { id: 4, name: '阅读', slug: 'reading' },
    tags: ['读书笔记', '投资', '思维'],
    author: '2B',
    date: '2024-03-01',
    readTime: '7 分钟',
    views: 456,
  },
  {
    id: 6,
    title: 'TypeScript 类型体操入门',
    slug: 'typescript-type-gymnastics',
    excerpt: '通过实际案例学习 TypeScript 高级类型用法，包括条件类型、映射类型、模板字面量类型等。',
    content: `
      <h2>什么是类型体操</h2>
      <p>类型体操指的是利用 TypeScript 的类型系统进行复杂的类型运算和推导，创建精确且灵活的类型定义。</p>
      
      <h2>条件类型</h2>
      <p>条件类型允许我们根据条件选择不同的类型，类似于 JavaScript 中的三元运算符。</p>
      
      <h2>实用工具类型</h2>
      <p>TypeScript 内置了许多实用工具类型，如 Partial、Required、Pick、Omit 等，理解它们的实现有助于编写更好的类型。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    category: { id: 1, name: '技术', slug: 'tech' },
    tags: ['TypeScript', 'JavaScript', '前端'],
    author: '2B',
    date: '2024-02-28',
    readTime: '12 分钟',
    views: 1023,
  },
]

export const getPostById = (id) => {
  return posts.find(post => post.id === parseInt(id))
}

export const getPostsByCategory = (slug) => {
  if (!slug || slug === 'all') return posts
  return posts.filter(post => post.category.slug === slug)
}

export const getRecentPosts = (limit = 5) => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit)
}

export const getPopularPosts = (limit = 5) => {
  return [...posts].sort((a, b) => b.views - a.views).slice(0, limit)
}

export const getAllTags = () => {
  const tagsSet = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag))
  })
  return Array.from(tagsSet)
}

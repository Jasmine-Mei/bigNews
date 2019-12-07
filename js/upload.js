; (function () {
    let backstage = {
        // 用户登录
        login: 'http://localhost:8080/api/v1/admin/user/login',
        // 获取用户信息
        getInfo: 'http://localhost:8080/api/v1/admin/user/info',
        // 获取用户详情
        getDetail: 'http://localhost:8080/api/v1/admin/user/detail',
        // 编辑用户信息
        edit_user: 'http://localhost:8080/api/v1/admin/user/edit',
        // 所有文章类别
        categoryList: 'http://localhost:8080/api/v1/admin/category/list',
        // 新增文章类别
        categoryAdd: 'http://localhost:8080/api/v1/admin/category/add',
        // 根据id查询指定文章类别
        categorySearch: 'http://localhost:8080/api/v1/admin/category/search',
        // 编辑文章类别
        categoryEdit: 'http://localhost:8080/api/v1/admin/category/edit',
        // 删除文章类别
        categoryDel: 'http://localhost:8080/api/v1/admin/category/delete',
        // 文章搜索
        articleSearch: 'http://localhost:8080/api/v1/admin/article/query',
        // 发布文章
        articlePush: 'http://localhost:8080/api/v1/admin/article/publish',
        // 根据id获取文章信息
        articleSearchById: 'http://localhost:8080/api/v1/admin/article/search',
        // 文章编辑
        articleEdit: 'http://localhost:8080/api/v1/admin/article/edit',
        // 删除文章
        articleDel: 'http://localhost:8080/api/v1/admin/article/delete',
        // 获取统计数据
        dataInfo: 'http://localhost:8080/api/v1/admin/data/info',
        // 日新增文章数量统计
        dataArticle: 'http://localhost:8080/api/v1/admin/data/article',
        // 各类型文章数量统计
        dataCategory: 'http://localhost:8080/api/v1/admin/data/category',
        // 日文章访问量
        dataVisit: 'http://localhost:8080/api/v1/admin/data/visit',
        // 文章评论搜索
        commentSearch: 'http://localhost:8080/api/v1/admin/comment/search',
        // 评论审核通过
        commentPass: 'http://localhost:8080/api/v1/admin/comment/pass',
        // 评论审核不通过
        commentReject: 'http://localhost:8080/api/v1/admin/comment/reject',
        // 删除评论
        commentDelete: 'http://localhost:8080/api/v1/admin/comment/delete'
    };
    window.backstage = backstage;

    let reception = {
        // 文章搜索
        search: 'http://localhost:8080/api/v1/index/search',
        // 文章类型
        category: 'http://localhost:8080/api/v1/index/category',
        // 热点图
        hotpic: 'http://localhost:8080/api/v1/index/hotpic',
        // 文章热门排行
        rank: 'http://localhost:8080/api/v1/index/rank',
        // 最新资讯
        news: 'http://localhost:8080/api/v1/index/latest',
        // 最新评论
        newsComment: 'http://localhost:8080/api/v1/index/latest_comment',
        // 焦点关注
        attention: 'http://localhost:8080/api/v1/index/attention',
        // 文章详细内容
        artitle: 'http://localhost:8080/api/v1/index/artitle',
        // 发表评论
        postComment: 'http://localhost:8080/api/v1/index/post_comment',
        // 评论列表
        getComment: 'http://localhost:8080/api/v1/index/get_comment'
    };
    window.reception = reception;
})();
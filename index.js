const checkAuthentication = (req, res, next) => {
    if (req.user.isAuthenticated) {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  app.get('/posts', checkAuthentication, (req, res) => {
    const posts = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      title: `Post ${index + 1}`,
      body: `This is the body of Post ${index + 1}`,
    }));
  
    res.json(posts);
  });
  